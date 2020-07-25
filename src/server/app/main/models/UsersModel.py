from . import db


class UsersModel(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(100))
    lastname = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    phonenumber = db.Column(db.String(100), unique=True)
    image = db.Column(db.String(1000))
