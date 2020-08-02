import json
import jwt
from instance.config import APP_ID, APP_SECRET, WEBHOOK_SECRET
import razorpay
import hmac
import hashlib
from ..models import PaymentModel,db

razorpay_client = razorpay.Client(auth=(APP_ID, APP_SECRET))


def process_payment(order_info):
    order_info = json.loads(order_info)
    result = None

    try:
        result = razorpay_client.order.create(dict(amount=str(order_info["amount"]), currency=order_info["order_currency"],
                                                   receipt=order_info["receipt"], payment_capture=order_info["payment_capture"]))
    except Exception as err:
        print(err)

    return json.dumps(result)


def process_verify(info, signature):
    
    ss = bytes(WEBHOOK_SECRET,"utf-8")
    

    new_signature = hmac.new(ss,msg=bytes(info),digestmod=hashlib.sha256).hexdigest()

    info = json.loads(info)

    payment_id = info["payload"]["payment"]["entity"]["id"]
    order_id = info["payload"]["payment"]["entity"]["order_id"]

    if signature == new_signature:
        data = PaymentModel(order_id=order_id,payment_id=payment_id,status=False)
        db.session.add(data)
        db.session.commit()
    else:
        print("\n\n\n")
        print("NOOOO")

    return json.dumps({"status": "ok"})

def payment_verify(info):
    payment_id = info["razorpay_payment_id"]
    order_id = info["razorpay_order_id"]

    query = PaymentModel.query.filter(payment_id == PaymentModel.payment_id,order_id == PaymentModel.order_id,PaymentModel.status == False)

    if query is None:
        return json.dumps({"error":True,"message":"Payment Invalid","payment":False})
    else:
        query.status = True
        db.session.commit()

        return json.dumps({"error":False,"payment":True,"message":"Payment Completed"})