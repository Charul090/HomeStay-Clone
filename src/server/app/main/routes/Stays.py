from . import stays
from flask import request
from ..services.listing import apartment_listing


@stays.route("/listing")
def Listing():
    response = apartment_listing(dict(request.args))
    return response
