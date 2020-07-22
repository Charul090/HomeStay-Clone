from . import guest
from flask import request
from ..services.guest import guest_register


@guest.route("/login")
def Login():
    return "Guest Login"


@guest.route("/register", methods=["POST"])
def Register():
    response = guest_register(request.json)

    return response
