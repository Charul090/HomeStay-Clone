from . import db


class UserAuthModel(db.Model):
    __tablename__ = "userauth"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    provider = db.column(db.String(100))
    provider_id = db.Column(db.String(100))
    access_token = db.Column(db.String(300))

