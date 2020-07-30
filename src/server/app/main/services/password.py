import json
import jwt
from ..models import db, VerificationModel, UsersModel
import datetime
from instance.config import SECRET_KEY
import secrets
import smtplib
from instance.config import SMTP_USERNAME, SMTP_PASSWORD


def password_recovery(info):
    s = smtplib.SMTP(host="email-smtp.ap-south-1.amazonaws.com")

    s.connect("email-smtp.ap-south-1.amazonaws.com", 587)

    s.starttls()

    s.login(SMTP_USERNAME, SMTP_PASSWORD)

    try:
        email = info["email"]
    except KeyError:
        return json.dumps({"error": True,
                           "message": "One or more fields are missing!"})

    if email == "":
        return json.dumps({"error": True, "message": "Empty fields"})

    status = UsersModel.query.filter(UsersModel.email == email).first()

    if status == None:
        return json.dumps({"error": True, "message": "Email doesn't exist"})

    token = secrets.token_urlsafe()
    user_id = status.id
    time = (datetime.datetime.utcnow() + datetime.timedelta(minutes=15)
            ).strftime("%Y-%m-%d %H:%M:%S")

    data = VerificationModel(email=email, user_id=user_id,
                             token=token, usage="reset", expires=time)
    db.session.add(data)
    db.session.commit()

    # Need to send frontend link when deployed on aws
    string_email = "%40".join(email.split("@"))
    link = "http://localhost:3000/password/reset?a="+token+"&email="+string_email

    msg = "From:noreply@charul.co\nTo:"+str(email)+"\nSubject:Password Reset Notification\n\nHello,\nUse the following link to reset password.Happy Homestaying!\n"+str(link)
    
    s.sendmail("noreply@charul.co",email,msg)

    return json.dumps({"error": False, "message": "Password reset link is sent to your email successfullyss"})


def password_reset(info):
    try:
        email = info["email"]
        token = info["token"]
        password = info["password"]
    except KeyError:
        return json.dumps({"error": True,
                           "message": "One or more fields are missing!"})

    if email == "" or token == "" or password == "":
        return json.dumps({"error": True, "message": "Empty fields"})

    status = VerificationModel.query.filter(
        VerificationModel.email == email, VerificationModel.token == token).first()

    if status == None:
        return json.dumps({"error": True, "message": "Token doesn't exist.Try again"})

    now = datetime.datetime.utcnow()

    if status.expires < now:
        db.session.delete(status)
        db.session.commit()
        return json.dumps({"error": True, "message": "Token Expired"})

    user = UsersModel.query.filter(UsersModel.email == email).first()

    user.password = password
    db.session.commit()

    db.session.delete(status)
    db.session.commit()

    return json.dumps({"error": True, "message": "Password changed successfully!"})
