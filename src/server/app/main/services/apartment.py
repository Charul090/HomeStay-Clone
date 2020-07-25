import json
import jwt
from ..models import db, UsersModel, ApartmentModel, BedroomModel, HostProfileModel
import datetime
import random


def basic_info(apartment_id):
    apartment_id = int(apartment_id)

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

    host_temp_data = {}
    count = 3

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

    return json.dumps({
        "error": False,
        "apartment_id": apartment_id,
        "apartment_data": apartment_data,
        "host_data": host_data
    })
