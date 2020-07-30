from . import db


class PaymentModel(db.Model):
    __tablename__ = "payment"
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.String(2000))
    payment_id = db.Column(db.String(2000))
    status = db.Column(db.Boolean)
