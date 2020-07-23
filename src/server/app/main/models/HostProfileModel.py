from . import db


class HostProfileModel(db.Model):
    __tablename__ = "hostprofile"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    apartment_id = db.Column(db.Integer, db.ForeignKey("apartment.id"))
    family_welcome = db.Column(db.JSON)
    friends_describe = db.Column(db.String(2000))
    host_guest = db.Column(db.String(2000))
    typical_day = db.Column(db.String(2000))
    difference = db.Column(db.String(2000))
    home_is = db.Column(db.String(2000))
    area_is = db.Column(db.String(2000))
