from . import stays
from flask import request
from ..services.listing import apartment_listing

{'order': 'popular', 'location': 'Mumbai', 'check_in': '24 Jul 2020', 'check_out': '30 Jul 2020', 'guests': '1', 'min_price': '', 'max_price': '863144', 'price_filter_currency': 'INR', 'meals_provided': '0', 'self_catering': '0', 'accept_male': '0', 'accept_female': '0', 'accept_couples': '0', 'accept_families': '0', 'accept_students': '0', 'wifi': '0', 'tv': '0', 'garden': '0', 'bikes': '0', 'parking': '0', 'swimming_pool': '0', 'gym': '0'}

@stays.route("/listing")
def Listing():
    info = {}
    
    info["page"] = request.args.get("page",default=1,type=int)
    info["order"] = request.args.get("order",default="popular")
    info["location"] = request.args.get("location",default="Mumbai",type=str)
    info["guests"] = request.args.get("guests",default=1,type=int)
    info["min_price"] = request.args.get("min_price",default=0,type=int)
    info["max_price"] = request.args.get("max_price",default=100000,type=int)
    info["meals_provided"] = request.args.get("meals_provided",default=0,type=int)
    info["self_catering"] = request.args.get("self_catering",default=0,type=int)
    info["males"] = request.args.get("accept_male",default=0,type=int)
    info["females"] = request.args.get("accept_female",default=0,type=int)
    info["couples"] = request.args.get("accept_couples",default=0,type=int)
    info["families"] = request.args.get("accept_families",default=0,type=int)
    info["students"] = request.args.get("accept_students",default=0,type=int)
    info["wifi"] = request.args.get("wifi",default=0,type=int)
    info["tv"] = request.args.get("tv",default=0,type=int)
    info["garden"] = request.args.get("garden",default=0,type=int)
    info["bikes"] = request.args.get("bikes",default=0,type=int)
    info["parking"] = request.args.get("parking",default=0,type=int)
    info["swimming_pool"] = request.args.get("swimming_pool",default=0,type=int)
    info["gym"] = request.args.get("gym",default=0,type=int)

    response = apartment_listing(info)

    return response
