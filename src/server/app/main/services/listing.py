import json
import jwt
from ..models import db, ApartmentModel, BedroomModel, HostProfileModel, ReviewsModel
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

    data = data[start:end]

    return json.dumps({
        "total_pages": total_pages,
        "page": info["page"],
        "data": data
    })
