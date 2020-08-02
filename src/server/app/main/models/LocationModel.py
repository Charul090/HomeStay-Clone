from . import db


class LocationModel(db.Model):
    __tablename__ = "location"
    id = db.Column(db.Integer, primary_key=True)
    apartment_id = db.Column(db.Integer, db.ForeignKey("apartment.id"))
    latitude = db.Column(db.String(100))
    longitude = db.Column(db.String(100))
