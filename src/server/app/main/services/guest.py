import json
import jwt
from ..models import db, UsersModel


def guest_register(info):
    try:
        firstname = info["firstname"]
        lastname = info["lastname"]
        email = info["email"]
        password = info["password"]

        if firstname == "" or lastname == "" or email == "" or password == "":
            return json.dumps({"error": True, "message": "Empty fields"})

        if type(firstname) is not str or type(lastname) is not str or type(email) is not str or type(password) is not str:
            return json.dumps({"error": True, "message": "Incorrect Datatype"})

        if "phonenumber" in info:
            phonenumber = info["phonenumber"]
        else:
            phonenumber = ""

        status = UsersModel.query.filter(UsersModel.email == email).first()

        if status == None:
            user = UsersModel(firstname=firstname, lastname=lastname,
                              email=email, password=password, phonenumber=phonenumber)
            db.session.add(user)
            db.session.commit()
            return json.dumps({"error": False,
                               "message": "User registered successfully"})
        else:
            return {"error": True, "message": "Email already exists"}

    except KeyError:
        return json.dumps({"error": True,
                           "message": "One or more fields are missing!"})


def guest_login(info):
    try:
        email = info["email"]
        password = info["password"]
    except KeyError:
        return False
    
    if email == "" or password == "":
        return False
    
    if type(email) is not str or type(password) is not str:
        return False
    
    return True