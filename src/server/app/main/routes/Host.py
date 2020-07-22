from . import host
from flask import request
from ..services.host import host_login


@host.route("/login", methods=["POST"])
def Login():
    response = host_login(request.json)

    return "response"

