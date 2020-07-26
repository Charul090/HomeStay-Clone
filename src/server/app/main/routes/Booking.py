from . import booking
from flask import request
from ..services.booking import set_booking

@booking.route("/add",methods=["POST"])
def booking():
    response = set_booking(request.json)
    return response

