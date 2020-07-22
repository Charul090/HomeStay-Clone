from flask import Blueprint

guest = Blueprint("guest", __name__)
host = Blueprint("host", __name__)
oauth = Blueprint("oauth", __name__)

from . import Guest,Host,Oauth