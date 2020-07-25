from . import apartment
from flask import request
from ..services.apartment import basic_info


@apartment.route("/info/<id>")
def basic(id):
    response = basic_info(id)
    return response
