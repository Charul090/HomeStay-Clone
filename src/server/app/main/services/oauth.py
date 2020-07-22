import json
import jwt
from ..models import db, UsersModel, UserAuthModel
import datetime
from instance.config import SECRET_KEY


def google_auth(info):
    user_details = info["profileObj"]
    access_token = info["wc"]["access_token"]
    provider = info["wc"]["idpId"]

    status = UsersModel.query.filter(
        UsersModel.email == user_details["email"]).first()

    if status is None:
        user = UsersModel(firstname=user_details["givenName"], lastname=user_details["familyName"],
                          email=user_details["email"], password="", phonenumber="")
        db.session.add(user)
        db.session.commit()

        status = UsersModel.query.filter(
            UsersModel.email == user_details["email"]).first()

    user_oauth = UserAuthModel(user_id=status.id, provider=provider,
                               provider_id=user_details["googleId"], access_token=access_token)
    db.session.add(user_oauth)
    db.session.commit()

    data = {
        "email": status.email,
        "created_at": str(datetime.datetime.utcnow()),
        "expiry_at": str(datetime.datetime.utcnow() + datetime.timedelta(days=1))
    }

    encoded_data = jwt.encode(data, SECRET_KEY)

    return json.dumps({"error": False, "message": "Logged in successfully", "token": encoded_data.decode()})
