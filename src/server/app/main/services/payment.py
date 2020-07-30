import json
import jwt
from instance.config import APP_ID, APP_SECRET
import razorpay

razorpay_client = razorpay.Client(auth=(APP_ID, APP_SECRET))


def process_payment(order_info):
    order_info = json.loads(order_info)
    print(order_info)
    result = None

    try:
        result = razorpay_client.order.create(dict(amount=str(order_info["amount"]), currency=order_info["order_currency"],
                                     receipt=order_info["receipt"], payment_capture=order_info["payment_capture"]))
    except Exception as err:
        print(err)

    return json.dumps(result)

