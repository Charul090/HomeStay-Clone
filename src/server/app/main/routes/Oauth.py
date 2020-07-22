from . import oauth
from flask import request
from ..services.oauth import google_auth,facebook_auth


@oauth.route("/google", methods=["POST"])
def googleAuth():
    response = google_auth(request.json)
    return response

@oauth.route("/facebook", methods=["POST"])
def facebookAuth():
    response = facebook_auth(request.json)
    return response