from . import db


class BedroomModel(db.Model):
    __tablename__ = "bedroom"
    id = db.Column(db.Integer, primary_key=True)
    apartment_id = db.Column(db.Integer, db.ForeignKey("apartment.id"))
    name = db.Column(db.String(100))
    beds = db.Column(db.String(100))
    guests = db.Column(db.Integer)
    bathroom_type = db.Column(db.String(150))
    price_1_night = db.Column(db.Integer)
    price_1_week = db.Column(db.Integer)
    price_1_month = db.Column(db.Integer)
    image = db.String(2000)
