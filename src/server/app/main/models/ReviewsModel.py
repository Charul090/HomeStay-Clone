from . import db


class ReviewsModel(db.Model):
    __tablename__ = "reviews"
    id = db.Column(db.Integer, primary_key=True)
    apartment_id = db.Column(db.Integer, db.ForeignKey("apartment.id"))
    guest_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    rating = db.Column(db.Integer)
    reviews = db.Column(db.String(1000))
