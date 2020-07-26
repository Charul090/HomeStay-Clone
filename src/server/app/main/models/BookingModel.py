from . import db


class BookingModel(db.Model):
    __tablename__ = "booking"
    id = db.Column(db.Integer, primary_key=True)
    apartment_id = db.Column(db.Integer, db.ForeignKey("apartment.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    start_date = db.Column(db.DateTime)
    end_date = db.Column(db.DateTime)
    total_cost = db.Column(db.Integer)
