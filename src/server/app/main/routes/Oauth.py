from . import oauth
from flask import request
from ..services.oauth import google_auth


@oauth.route("/google", methods=["POST"])
def googleAuth():
    response = google_auth(request.json)
    return response
