## Guest API

### Register
POST `/guest/register`

#### Request
    {
        "firstname":"home",
        "lastname":"stay",
        "email":"home@gmail.com",
        "password":"home"
    }

#### Response
##### Success
    {
        "error": false,
        "message": "User registered successfully"
    }

##### Failure
    {
        "error": true,
        "message": "Email already exists"
    }


### Login
POST `/guest/login`

#### Request
    {
        "email":"home@gmail.com",
        "password":"home"
    }

#### Response
##### Success
    {
        "error": false,
        "message": "Logged in successfully",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
}

##### Failure
    {
        "error": true,
        "message": "Incorrect Password!"
    }

## Host API

### Login
POST `/guest/login`

#### Request
    {
        "email":"admin@gmail.com",
        "password":"admin"
    }

#### Response
##### Success
    {
        "error": false,
        "message": "Logged in successfully",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
    }

##### Failure
    {
        "error": true,
        "message": "Incorrect Password!"
    }

## OAuth API

### Google OAuth
POST `/oauth/google`

#### Request
    Google OAuth Object

#### Response
    {
        "error": false,
        "message": "Logged in successfully",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
    }

### Facebook OAuth
POST `/oauth/facebook`

#### Request
    Facebook OAuth Object

#### Response
    {
        "error": false,
        "message": "Logged in successfully",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
    }

## Listing API
GET `/stays/listing`

#### URL Query
    order: 'popular','distance','reviews',''
    location: 'Mumbai','Delhi','Bangalore','Hyderabad' 
    check_in: date 
    check_out: date
    guests: 1+
    min_price: price 
    max_price: price
    meals_provided: 0 or 1(0-false,1-true) 
    self_catering: 0 or 1(0-false,1-true) 
    accept_male: 0 or 1(0-false,1-true)
    accept_female: 0 or 1(0-false,1-true) 
    accept_couples: 0 or 1(0-false,1-true) 
    accept_families: 0 or 1(0-false,1-true) 
    accept_students: 0 or 1(0-false,1-true) 
    wifi: 0 or 1(0-false,1-true) 
    tv: 0 or 1(0-false,1-true)
    garden: 0 or 1(0-false,1-true) 
    bikes: 0 or 1(0-false,1-true)
    parking: 0 or 1(0-false,1-true) 
    swimming_pool: 0 or 1(0-false,1-true)
    gym: 0 or 1(0-false,1-true)

#### Response
##### Success
    {
        "total_pages": 1,
        "page": 1,
        "data": [
            {
                "user_name": "Name",
                "apartment_id": 1,
                "user_id": 2,
                "apartment_name": "Name Bungalow Experience",
                "city": "Mumbai",
                "location": "Near Juhu",
                "price_per_night": 4500,
                "description": "Your own large room in our beautiful bungalow (villa) with an organic vegetable garden and direct access to the famous Juhu Beach...."
            },...
        ]
    }