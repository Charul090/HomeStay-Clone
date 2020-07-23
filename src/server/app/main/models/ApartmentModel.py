from . import db


class ApartmentModel(db.Model):
    __tablename__ = "apartment"
    id = db.Column(db.Integer,primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey("users.id"))
    type = db.Column(db.String(100))
    name = db.Column(db.String(100))
    about_homestay = db.Column(db.String(1000))
    house_facilities = db.Column(db.JSON)
    about_area = db.Column(db.String(1000))
    local_facilities = db.Column(db.JSON)
    meals = db.Column(db.JSON)
    rules = db.Column(db.String(1000))
    image = db.String(2000)
