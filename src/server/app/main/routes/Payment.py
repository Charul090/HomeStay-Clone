from flask import request
from . import payment
from ..services.payment import process_payment, process_verify,payment_verify


@payment.route("/order", methods=["POST"])
def start_order():
    response = process_payment(request.data)
    return response


@payment.route("/verify", methods=["POST"])
def verify_order():
    webhook_signature = request.headers.get("x-razorpay-signature")
    response = process_verify(request.data,webhook_signature)
    return response


@payment.route("/authenticate",methods=["POST"])
def authenticate_order():
    response = payment_verify(request.json)
    return response