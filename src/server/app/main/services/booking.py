import json
import jwt
from ..models import db,BookingModel,ApartmentModel
import datetime
import random


def set_booking(info):
    ## logic for converting start time and end time into datetime object pending

    apartment_check = ApartmentModel.query.filter(ApartmentModel.id == info["apartment_id"]).first()

    if apartment_check is None:
        return json.dumps({"error":True,"message":"Apartment id Invalid"})

    date_check = BookingModel.query.filter(BookingModel.apartment_id == info["apartment_id"]).all()

    for x in date_check:
        if info["start_time"] >= date_check.start_date and info["start_time"] <= date_check.end_date:
            return json.dumps({"error":True,"message":"Date already booked"})
    
    booking = BookingModel(apartment_id=info["apartment_id"],user_id=info["user_id"],start_date=info["start_date"],end_date=info["end_date"],total_cost=info["total_cost"])

    return json.dumps({"error":False,"message":"Booking Successfull"})

def check_booking(id,info):

    info = dict(info)

    start = info["start"]
    end = info["end"]

    start = datetime.datetime.strptime(start,'%Y-%m-%dT%H:%M:%S.%fZ')
    end = datetime.datetime.strptime(end,'%Y-%m-%dT%H:%M:%S.%fZ')

    query = BookingModel.query.filter(BookingModel.apartment_id == id).all()

    print("\n\n")
    for x in query:
        if start >= x.start_date and start <= x.end_date:
            return json.dumps({"status":False})
        
        if end >= x.start_date and end <= x.end_date:
            return json.dumps({"status":False})
        
        if start <=x.start_date and end >=x.end_date:
            return json.dumps({"status":False})


    return json.dumps({"status":True})