from . import guest
from flask import request
from ..services.guest import guest_register, guest_login


@guest.route("/login", methods=["POST"])
def Login():
    response = guest_login(request.json)

    return response


@guest.route("/register", methods=["POST"])
def Register():
    response = guest_register(request.json)

    return response
