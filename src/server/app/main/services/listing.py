import json
import jwt
from ..models import db, ApartmentModel, BedroomModel, HostProfileModel, ReviewsModel,LocationModel
import datetime
from ..utils.pagination import pagination

"""
{'order': 'popular', 'location': 'Mumbai', 'check_in': '24 Jul 2020', 'check_out': '30 Jul 2020', 'guests': '1', 'min_price': '', 'max_price': '863144', 'price_filter_currency': 'INR', 'meals_provided': '0', 'self_catering': '0', 'accept_male': '0', 'accept_female': '0', 'accept_couples': '0', 'accept_families': '0', 'accept_students': '0', 'wifi': '0', 'tv': '0', 'garden': '0', 'bikes': '0', 'parking': '0', 'swimming_pool': '0', 'gym': '0'}
"""


def apartment_listing(info):
    # guests
    # min-price,max-price
    meals = ['meals_provided', 'self_catering']
    welcome_stays = ['males', 'females',
                     'couples', 'families', 'students']
    facilities = ['wifi', 'tv', 'garden', 'bikes',
                  'parking', 'swimming_pool', 'gym']

    query = db.session.execute(
        ''' SELECT a.id,a.user_id,a.city,a.house_facilities,a.meals,b.guests,b.price_1_night,h.family_welcome FROM apartment as a JOIN hostprofile as h ON a.user_id=h.user_id JOIN bedroom as b ON b.apartment_id=a.id;''')

    pass_id = []

    for x in query:
        query_apartid = x[0]
        query_userid = x[1]
        if x[2] == info["location"]:
            if x[5] >= int(info["guests"]):
                if x[6] >= int(info["min_price"]) and x[6] <= int(info["max_price"]):
                    query_house = json.loads(x[3])
                    query_meal = json.loads(x[4])
                    query_fam = json.loads(x[7])

                    flag1 = True
                    flag2 = True
                    flag3 = True

                    for y in facilities:
                        if info[y] == 1:
                            if query_house[y] is False:
                                flag1 = False
                                break

                    for y in meals:
                        if info[y] == 1:
                            if query_meal[y] is False:
                                flag2 = False
                                break

                    for y in welcome_stays:
                        if info[y] == 1:
                            if query_fam[y] is False:
                                flag3 = False
                                break

                    if flag1 and flag2 and flag3:
                        pass_id.append(query_apartid)

    if len(pass_id) != 0:
        query_placeholder = ", ".join(["%d" for x in pass_id])
        query_data = db.session.execute(
            ''' SELECT u.firstname,a.id,a.user_id,a.city,a.name,a.neighbourhood_area,b.price_1_night,a.about_homestay FROM apartment as a JOIN users as u ON a.user_id=u.id JOIN bedroom as b ON b.apartment_id=a.id WHERE a.id IN ({}); '''.format(query_placeholder) % (tuple(pass_id)))
    else:
        query_data = []

    data = []

    if len(pass_id) > 0:
        for x in query_data:
            obj = {}
            obj["user_name"] = x[0]
            obj["apartment_id"] = x[1]
            obj["user_id"] = x[2]
            obj["apartment_name"] = x[4]
            obj["city"] = x[3]
            obj["location"] = x[5]
            obj["price_per_night"] = x[6]
            obj["description"] = x[7][0:147]+"..."
            data.append(obj)

    total_pages, start, end = pagination(len(data), info["page"])

    if total_pages is False:
        return json.dumps({
            "error":True,
            "message":"Invalid page number."
        })

    data = data[start:end]

    return json.dumps({
        "error":False,
        "total_pages": total_pages,
        "page": info["page"],
        "data": data
    })


def add_apartment():
    user_id = 13
    type = "Villa"
    name = "A Luxurious Villa for cozy stay"
    country = "India"
    city = "Mumbai"
    neighbourhood_area = "THANE WEST"
    address1 =""
    address2 =""
    zipcode = "400080"
    about_homestay = "Its a Luxurious Villa with a lush green surroundings.My place is close to the city center, great views /Malls /Cinema Hall. My place is good for couples and families (with kids) and youngsters to enjoy your stay and cherish these moments for ever.We are a young couple who want to extend a fun,friendly stay to travellers for whom this may be an alien city.Help them familiarise with the city;food and entertainment that Mumbai offers.About us , I am a Director in a MNC and my wife is a home makers.We follow world cinema;cuisine;explore new places;meet new people;enjoying music and partying.Since we have travelled the world we understand the challenges of a traveller (small and big and would want to make there stay as hassle free as possible-like you are at home !Our motto-Go to unseen places and comeback with unheard stories."
    house_facilities = {
        "garden":True,
        "bikes":False,
        "computer":True,
        "games_room":False,
        "smoke_alarm":False,
        "patio":False,
        "barbecue":False,
        "parking":True,
        "laundry":False,
        "internet":True,
        "tv":True,
        "swimming_pool":False,
        "wheelchair_accessible":False,
        "ac":True,
        "gym":False,
        "non-smoking":True,
        "allow_smoking":True
    }
    about_area ="My place is close to the city center, great views Malls Cinema Hall. My place is good for couples and families (with kids).\nLOCAL AREA FACILITIES"
    local_facilities = {
        "tennis":False,
        "park":True,
        "gym":True,
        "golf":False,
        "swimming":False,
        "bowling":False,
        "beach":False,
        "airport":False,
        "cinema":False,
        "library":False,
        "museum":False,
        "shopping_centre":True,
        "amusement_park":False,
        "horse_stables":False,
        "water_sports":False,
        "sports_arena":False,
        "health_club":False,
        "fishing":False,
        "restaurant":True,
        "bus_stop":True,
        "train_station":True,
        "hospital":True
    }
    meals = {
        "meals_provided":True,
        "self_catering":True
    }
    rules = "Payment Method: Please note that we require our guests to pay 50% of the booking total to us in advance of the booking to hold your room (on top of the 15% deposit is paid to Homestay.com)\nCancellation Policy: We ask our guests to give us at least 7 days’ notice for any cancellation. Any cancellation later than this will not be refunded.Smoking is allowed outdoors only."
    image ="https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS82NjE3OTU_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--ed9cf9b842eae1e3ac600d308052c10759fc91d6&style=carousel"
    current_rating = 5
    created_at="2015-07-26 07:47:20"

    apartment = ApartmentModel(user_id=user_id,type=type,name=name,country=country,city=city,neighbourhood_area=neighbourhood_area,address1=address1,address2=address2,zipcode=zipcode,
    about_homestay=about_homestay,house_facilities=house_facilities,about_area=about_area,local_facilities=local_facilities,meals=meals,rules=rules,image=image,current_rating=current_rating,created_at=created_at)

    db.session.add(apartment)
    db.session.commit()


def add_bedroom():
    apartment_id = 6
    name = "MASTER BEDROOM"
    beds = "Double Bed"
    guests = "2"
    bathroom_type = "Bathroom private (exclusive to guest)"
    price_1_night = 1755
    price_1_week = 12000
    price_1_month = 30000
    image = "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS82NjE4MTU_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--7aebbc8777180ec73f9b9c49e32c9c66d89e909b&style=carousel"

    bedroom = BedroomModel(apartment_id=apartment_id,name=name,beds=beds,guests=guests,bathroom_type=bathroom_type,price_1_night=price_1_night,price_1_month=price_1_month,price_1_week=price_1_week,image=image)

    db.session.add(bedroom)
    db.session.commit()


def add_host_profile():
    user_id = 14
    family_welcome = {
        "males":True,
        "females":True,
        "couples":True,
        "families":True,
        "students":True
    }
    friends_describe = ""
    host_guest = "I’m helpful and hands on. I can show them where to go and help them get there."
    typical_day = "I’m mostly at home/work from home"
    difference = ""
    home_is = ""
    area_is = ""
    hobbies = ["Computer games", "Cooking", "Playing cards", "Reading", "Watching movies"]

    host_porfile = HostProfileModel(user_id=user_id,family_welcome=family_welcome,host_guest=host_guest,typical_day=typical_day,hobbies=hobbies)

    db.session.add(host_porfile)
    db.session.commit()

def add_location():
    apartment_id=6
    latitude="19.238852" 
    longitude="73.014052"

    location = LocationModel(apartment_id=apartment_id,latitude=latitude,longitude=longitude)
    db.session.add(location)
    db.session.commit()

def add_reviews():
    guest_id=37
    apartment_id=6
    rating=5
    review="Bharat home is very nice. He give me many good suggest about travel Bombay ，homestay very happy.Bharat wife cooking breakfast very delicious. India food. We often talk about India culture.if you want travel Bombay.must to his home is good idea .wish i can come again his homestay"
    reviews = ReviewsModel(guest_id=guest_id,apartment_id=apartment_id,rating=rating,reviews=review)
    db.session.add(reviews)
    db.session.commit()
