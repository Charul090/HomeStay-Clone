import json
import jwt
from ..models import db, UsersModel, ApartmentModel, BedroomModel, HostProfileModel, LocationModel, ReviewsModel, BookingModel
import datetime
import random


def basic_info(apartment_id):
    apartment_id = int(apartment_id)
    social_words = ["Sociable", "Trusting", "Open minded",
                    "Cultured", "Helpful", "Friendly", "Outgoing", "Creative"]

    apartment_data = {}
    host_data = {"questions": {}}
    owner_id = None

    apartment_query = ApartmentModel.query.filter(
        ApartmentModel.id == apartment_id).first()

    if apartment_query is None:
        return json.dumps({
            "error": True,
            "message": "Invalid apartment Id"
        })

    owner_id = apartment_query.user_id
    apartment_data["name"] = apartment_query.name
    apartment_data["house_facilities"] = apartment_query.house_facilities
    apartment_data["area"] = apartment_query.neighbourhood_area
    apartment_data["city"] = apartment_query.city
    apartment_data["about"] = apartment_query.about_homestay
    apartment_data["country"] = apartment_query.country
    apartment_data["apartment_image"] = apartment_query.image
    apartment_data["rating"] = apartment_query.current_rating if apartment_query.current_rating != None else "N.A"
    created_at = apartment_query.created_at
    host_data["created_at"] = created_at.year

    bedroom_query = BedroomModel.query.filter(
        BedroomModel.apartment_id == apartment_id).first()

    apartment_data["price_starting"] = bedroom_query.price_1_night
    apartment_data["bedroom_image"] = bedroom_query.image

    hostprofile_query = HostProfileModel.query.filter(
        HostProfileModel.user_id == owner_id).first()

    user_query = UsersModel.query.filter(UsersModel.id == owner_id).first()

    host_data["host_name"] = user_query.firstname
    host_data["host_pic"] = user_query.image

    host_temp_data = {}
    count = 3

    reviews_query = ReviewsModel.query.filter(
        ReviewsModel.apartment_id == apartment_id).all()

    apartment_data["number_reviews"] = len(reviews_query)

    host_data["welcomes"] = hostprofile_query.family_welcome
    if hostprofile_query.friends_describe != None:
        host_temp_data["friends_describe"] = hostprofile_query.friends_describe
    if hostprofile_query.host_guest != None:
        host_temp_data["host_guest"] = hostprofile_query.host_guest
    if hostprofile_query.typical_day != None:
        host_temp_data["typical_day"] = hostprofile_query.typical_day
    if hostprofile_query.difference != None:
        host_temp_data["difference"] = hostprofile_query.difference
    if hostprofile_query.home_is != None:
        host_temp_data["home_is"] = hostprofile_query.home_is
    if hostprofile_query.hobbies != None:
        host_data["hobbies"] = hostprofile_query.hobbies
        count -= 1

    keys = host_temp_data.keys()

    if len(host_temp_data) > count:
        numbers = random.sample(range(1, 4), count)

        for x in numbers:
            host_data[keys[x]] = host_temp_data[keys[x]]
    else:
        for x, y in host_temp_data.items():
            host_data["questions"][x] = y

    numbers = random.sample(range(0, len(social_words)), 3)

    social_skills = []

    for x in numbers:
        social_skills.append(social_words[x])

    social_skills = ",".join(social_skills)
    host_data["social_skills"] = social_skills

    return json.dumps({
        "error": False,
        "apartment_id": apartment_id,
        "apartment_data": apartment_data,
        "host_data": host_data
    })


def area_info(apartment_id):
    apartment_id = int(apartment_id)
    area_data = {}
    review_data = []

    apartment_query = ApartmentModel.query.filter(
        ApartmentModel.id == apartment_id).first()

    area_data["about_area"] = apartment_query.about_area
    area_data["local_facilities"] = apartment_query.local_facilities
    area_data["meals"] = apartment_query.meals
    area_data["rules"] = apartment_query.rules

    location_query = LocationModel.query.filter(
        LocationModel.apartment_id == apartment_id).first()

    if location_query is not None:
        area_data["latitude"] = location_query.latitude
        area_data["longitude"] = location_query.longitude

    review_query = ReviewsModel.query.filter(
        ReviewsModel.apartment_id == apartment_id).all()

    if review_query is not None:
        for x in review_query:
            obj = {}
            obj["review"] = x.reviews
            obj["rating"] = x.rating

            user_query = UsersModel.query.filter(
                UsersModel.id == x.guest_id).first()

            obj["name"] = user_query.firstname
            obj["profile_pic"] = user_query.image
            review_data.append(obj)

    return json.dumps({"error": False, "apartment_id": apartment_id, "area_data": area_data, "reviews_data": review_data})


def booking_info(apartment_id):
    apartment_id = int(apartment_id)
    bedroom_data = {}
    booking_data = []

    bedroom_query = BedroomModel.query.filter(
        BedroomModel.apartment_id == apartment_id).first()

    bedroom_data["name"] = bedroom_query.name
    bedroom_data["beds"] = bedroom_query.beds
    bedroom_data["guests"] = bedroom_query.guests
    bedroom_data["bathroom_type"] = bedroom_query.bathroom_type
    bedroom_data["image"] = bedroom_query.image

    try:
        bedroom_data["price_1_night"] = bedroom_query.price_1_night
    except AttributeError:
        pass

    try:
        bedroom_data["price_1_week"] = bedroom_query.price_1_week
    except AttributeError:
        pass

    try:
        bedroom_data["price_1_month"] = bedroom_query.price_1_month
    except AttributeError:
        pass

    booking_query = BookingModel.query.filter(
        BookingModel.apartment_id == apartment_id).all()

    for x in booking_query:
        if x.start_date >= datetime.datetime.utcnow():
            obj = {
                "start_date": x.start_date,
                "end_date": x.end_date
            }

            booking_data.append(obj)

    return json.dumps({"error": False, "bedroom": bedroom_data, "booking": booking_data})


def recommendation_info(id):
    id = int(id)

    meals = ['meals_provided', 'self_catering']
    welcome_stays = ['males', 'females',
                     'couples', 'families', 'students']
    facilities = ['internet', 'tv', 'garden', 'bikes',
                  'parking', 'swimming_pool', 'gym']

    query = db.session.execute(
        ''' SELECT a.id,a.user_id,a.city,a.house_facilities,a.meals,b.guests,b.price_1_night,h.family_welcome FROM apartment as a JOIN hostprofile as h ON a.user_id=h.user_id JOIN bedroom as b ON b.apartment_id=a.id WHERE a.id=%d;''' % (id))

    apartment_facilites = []
    apartment_meals = []
    apartment_welcome = []

    for x in query:
        for y in facilities:
            obj = json.loads(x[3])
            if obj[y] is True:
                apartment_facilites.append(y)

        for z in meals:
            obj = json.loads(x[4])
            if obj[z] is True:
                apartment_meals.append(z)

        for w in welcome_stays:
            obj = json.loads(x[7])
            if obj[w] is True:
                apartment_welcome.append(w)

    recommend_query = db.session.execute(
        ''' SELECT a.id,a.user_id,a.city,a.house_facilities,a.meals,b.guests,b.price_1_night,h.family_welcome FROM apartment as a JOIN hostprofile as h ON a.user_id=h.user_id JOIN bedroom as b ON b.apartment_id=a.id WHERE a.id!=%d;''' % (id))

    weight_data = []
    weight_count = {}

    for x in recommend_query:
        query_house = json.loads(x[3])
        query_meal = json.loads(x[4])
        query_fam = json.loads(x[7])
        weight = 0

        for y in apartment_facilites:
            if query_house[y]:
                weight += 1

        for y in apartment_meals:
            if query_meal[y]:
                weight += 1

        for y in apartment_welcome:
            if query_fam[y]:
                weight += 1

        if weight in weight_count:
            weight_count[weight].append(x[0])
        else:
            weight_count[weight] = [x[0]]

    weight_keys = list(weight_count.keys())

    weight_keys.sort(reverse=True)

    count = 3

    recommend_id = []

    for x in weight_keys:
        if count <= 3:
            if len(weight_count[x]) <= count:
                for y in weight_count[x]:
                    recommend_id.append(y)
                    count -= 1
            else:
                numbers = random.sample(
                    range(0, len(weight_count[x])), count)
                for z in numbers:
                    recommend_id.append(weight_count[x][z])
                    count -= 1

        else:
            break

    query_placeholder = ", ".join(["%d" for x in recommend_id])
    query_data = db.session.execute(
        ''' SELECT u.firstname,a.id,a.user_id,a.city,a.name,a.neighbourhood_area,b.price_1_night,a.about_homestay,u.image,a.current_rating,a.image,b.image FROM apartment as a JOIN users as u ON a.user_id=u.id JOIN bedroom as b ON b.apartment_id=a.id WHERE a.id IN ({}); '''.format(query_placeholder) % (tuple(recommend_id)))
    
    recommendation_data = []

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
            obj["user_pic"] = x[8]
            obj["current_rating"] = 0 if x[9] == None else x[9]
            obj["apartment_image"] = x[10]
            obj["bedroom_image"] = x[11]

            reviews = ReviewsModel.query.filter(ReviewsModel.apartment_id == x[1]).all()
            obj["reviews_number"] = len(reviews)



            recommendation_data.append(obj)

    return json.dumps({"apartment_id":id,"data":recommendation_data})
