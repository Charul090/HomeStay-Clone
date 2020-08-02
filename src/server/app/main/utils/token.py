import jwt
from instance.config import SECRET_KEY
import datetime


def decode_token(token):
    decoded_data = jwt.decode(token, SECRET_KEY)

    start = decoded_data["created_at"]
    end = decoded_data["expiry_at"]

    end = datetime.datetime.strptime(end, "%Y-%m-%d %H:%M:%S.%f")

    if end < datetime.datetime.utcnow():
        return False

    return decoded_data["email"]
