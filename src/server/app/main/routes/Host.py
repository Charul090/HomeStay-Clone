from . import host
from flask import request
from ..services.host import host_login
from ..services.listing import add_apartment,add_bedroom,add_host_profile,add_location,add_reviews


@host.route("/login", methods=["POST"])
def Login():
    response = host_login(request.json)
    return response

@host.route("/register")
def Register():
    add_reviews()
    return "Success"
