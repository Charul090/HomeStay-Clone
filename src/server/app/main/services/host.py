import json
import jwt
from ..models import db, UsersModel
import datetime
from instance.config import SECRET_KEY


def host_login(info):
    try:
        email = info["email"]
        password = info["password"]
    except KeyError:
        return json.dumps({"error": True,
                           "message": "One or more fields are missing!"})

    if email == "" or password == "":
        return json.dumps({"error": True, "message": "Empty fields"})

    if type(email) is not str or type(password) is not str:
        return json.dumps({"error": True, "message": "Incorrect Datatype"})

    status = UsersModel.query.filter(UsersModel.email == email).first()

    if status is None:
        return json.dumps({"error": True, "message": "Email doesn't exist"})
    else:
        if status.email == email and status.password == password:
            data = {
                "email": status.email,
                "created_at": str(datetime.datetime.utcnow()),
                "expiry_at": str(datetime.datetime.utcnow() + datetime.timedelta(days=1))
            }

            encoded_data = jwt.encode(data, SECRET_KEY)

            return json.dumps({"error": False, "message": "Logged in successfully", "token": encoded_data.decode()})

        return json.dumps({"error": True, "message": "Incorrect Password!"})
