from flask import request
from . import payment
from ..services.payment import process_payment


@payment.route("/order",methods=["POST"])
def start_order():
    response = process_payment(request.data)
    return response