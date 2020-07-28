import json
import jwt
from ..models import db, UsersModel, UserAuthModel, ApartmentModel
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
                          email=user_details["email"], password="")
        db.session.add(user)
        db.session.commit()

        status = UsersModel.query.filter(
            UsersModel.email == user_details["email"]).first()

    user_oauth = UserAuthModel(user_id=status.id, provider=provider,
                               provider_id=user_details["googleId"], access_token=access_token)
    db.session.add(user_oauth)
    db.session.commit()

    host = ApartmentModel.query.filter(
        ApartmentModel.user_id == status.id).first()

    if host is None:
        host = False
    else:
        host = True

    data = {
        "email": status.email,
        "created_at": str(datetime.datetime.utcnow()),
        "expiry_at": str(datetime.datetime.utcnow() + datetime.timedelta(days=1))
    }

    encoded_data = jwt.encode(data, SECRET_KEY)

    return json.dumps({"name": status.firstname,
                       "host": host, "error": False, "message": "Logged in successfully", "token": encoded_data.decode(), "host": host})


def facebook_auth(info):
    name = info["name"].split(" ")

    firstname = name[0]
    lastname = name[1]
    email = info["email"]
    provider = info["graphDomain"]
    provider_id = info["id"]
    access_token = info["accessToken"]

    status = UsersModel.query.filter(
        UsersModel.email == email).first()

    if status is None:
        user = UsersModel(firstname=firstname, lastname=lastname,
                          email=email, password="")
        db.session.add(user)
        db.session.commit()

        status = UsersModel.query.filter(
            UsersModel.email == email).first()

    user_oauth = UserAuthModel(user_id=status.id, provider=provider,
                               provider_id=provider_id, access_token=access_token)
    db.session.add(user_oauth)
    db.session.commit()

    host = ApartmentModel.query.filter(
        ApartmentModel.user_id == status.id).first()

    if host is None:
        host = False
    else:
        host = True

    data = {
        "name": status.firstname,
        "host": host,
        "email": status.email,
        "created_at": str(datetime.datetime.utcnow()),
        "expiry_at": str(datetime.datetime.utcnow() + datetime.timedelta(days=1))
    }

    encoded_data = jwt.encode(data, SECRET_KEY)

    return json.dumps({"name": status.firstname,
                       "host": host, "error": False, "message": "Logged in successfully", "token": encoded_data.decode(), "host": host})
