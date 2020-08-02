from . import booking
from flask import request
from ..services.booking import set_booking,check_booking

@booking.route("/add",methods=["POST"])
def book():
    response = set_booking(request.json)
    return response

@booking.route("/check/<id>")
def status(id):
    response = check_booking(id,request.args)
    return response
