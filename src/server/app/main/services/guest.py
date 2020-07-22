import json
import jwt
from ..models import db, UsersModel

# {'firstname': 'A', 'lastname': 'A', 'email': 'baricharul9@gmail.com', 'password': 'A', 'phonenumber': 9999999}


def guest_register(info):
    try:
        firstname = info["firstname"]
        lastname = info["lastname"]
        email = info["email"]
        password = info["password"]

        if firstname == "" or lastname == "" or email == "" or password == "":
            return False

        if type(firstname) is not str or type(lastname) is not str or type(email) is not str or type(password) is not str:
            return False

        if "phonenumber" in info:
            phonenumber = info["phonenumber"]
        else:
            phonenumber = ""
    except KeyError:
        return False

    return True
