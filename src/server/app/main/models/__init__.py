from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .UsersModel import UsersModel
from .VerificationModel import VerificationModel
from .UserAuthModel import UserAuthModel
from .ApartmentModel import ApartmentModel
from .BedroomModel import BedroomModel
from .HostProfileModel import HostProfileModel
from .ReviewsModel import ReviewsModel
from .BookingModel import BookingModel
from .LocationModel import LocationModel