from . import db


class VerificationModel(db.Model):
    __tablename__ = "verification"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    token = db.Column(db.String(200))
    usage = db.Column(db.String(100))
    expires = db.Column(db.DateTime)
