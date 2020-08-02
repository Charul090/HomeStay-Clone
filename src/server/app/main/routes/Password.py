from . import password
from flask import request
from ..services.password import password_recovery, password_reset


@password.route("/recovery", methods=["POST"])
def Recovery():
    response = password_recovery(request.json)

    return response


@password.route("/reset", methods=["POST"])
def Reset():
    response = password_reset(request.json)
    
    return response
