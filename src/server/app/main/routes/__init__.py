from flask import Blueprint

guest = Blueprint("guest", __name__)
host = Blueprint("host", __name__)
oauth = Blueprint("oauth", __name__)
password = Blueprint("password", __name__)
stays = Blueprint("stays",__name__)
apartment = Blueprint("apartment",__name__)
booking = Blueprint("booking",__name__)

from . import Guest,Host,Oauth,Password,Stays,Apartment,Booking
