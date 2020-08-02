import json
import jwt
from ..models import db,BookingModel,ApartmentModel,UsersModel
import datetime
import random
from ..utils.token import decode_token
import smtplib
from instance.config import SMTP_USERNAME, SMTP_PASSWORD


def set_booking(info):
    ## logic for converting start time and end time into datetime object pending
    start = info["start"]
    end = info["end"]

    email = decode_token(info["token"])

    if email is False:
        return json.dumps({"error":True,"message":"Login token expired","booking":False})
    
    user_query = UsersModel.query.filter(UsersModel.email == email).first()

    if user_query is None:
        return json.dumps({"error":True,"message":"Email is invalid","booking":False})
    
    
    s = smtplib.SMTP(host="email-smtp.ap-south-1.amazonaws.com")

    s.connect("email-smtp.ap-south-1.amazonaws.com", 587)

    s.starttls()

    s.login(SMTP_USERNAME, SMTP_PASSWORD)


    start = datetime.datetime.strptime(start,'%Y-%m-%dT%H:%M:%S.%fZ')
    end = datetime.datetime.strptime(end,'%Y-%m-%dT%H:%M:%S.%fZ')

    apartment_check = ApartmentModel.query.filter(ApartmentModel.id == info["apartment_id"]).first()

    if apartment_check is None:
        return json.dumps({"error":True,"message":"Apartment id Invalid","booking":False})

    date_check = BookingModel.query.filter(BookingModel.apartment_id == info["apartment_id"]).all()

    for x in date_check:
        if start >= x.start_date and end <= x.end_date:
            return json.dumps({"error":True,"message":"Date already booked","booking":False})
    
    booking = BookingModel(apartment_id=info["apartment_id"],start_date=start,end_date=end,total_cost=info["total_cost"],user_id=user_query.id)
    db.session.add(booking)
    db.session.commit()
    
    booking_query = BookingModel.query.filter(BookingModel.apartment_id == info["apartment_id"],BookingModel.start_date == start).first()

    msg = "From:noreply@charul.co\nTo:"+str(email)+"\nSubject:Booking Confirmation\n\nHello,\nFollowing are the booking details.Happy Homestaying!\nPayment id: "+str(info["response"]["razorpay_order_id"])+"\nBooking Id: "+str(booking_query.id)+"\nName: "+str(user_query.firstname)+"\nEmail: "+str(email)+"\nTotal Cost: Rs."+str(info["total_cost"])+"\nStart Date: "+str(start.strftime("%d/%m/%Y"))+"\nEnd Date: "+str(end.strftime("%d/%m/%Y"))
    
    s.sendmail("noreply@charul.co",email,msg)

    return json.dumps({"error":False,"message":"Booking Successfull","booking":True})

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