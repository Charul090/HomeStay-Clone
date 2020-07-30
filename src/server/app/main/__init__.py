from flask import Flask
from flask_cors import CORS
from config import app_config
from .routes import guest as guest_blueprint,host as host_blueprint,oauth as oauth_blueprint,password as password_blueprint,stays as stays_blueprint,apartment as apartment_blueprint,booking as booking_blueprint,payment as payment_blueprint
from .models import db
from flask_migrate import Migrate


def create_app(config_name):
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    app.config.from_object(app_config[config_name])
    app.config.from_pyfile("config.py")

    app.register_blueprint(guest_blueprint, url_prefix="/guest")
    app.register_blueprint(host_blueprint, url_prefix="/host")
    app.register_blueprint(oauth_blueprint, url_prefix="/oauth")
    app.register_blueprint(password_blueprint, url_prefix="/password")
    app.register_blueprint(stays_blueprint, url_prefix="/stays")
    app.register_blueprint(apartment_blueprint, url_prefix="/apartment")
    app.register_blueprint(booking_blueprint, url_prefix="/booking")
    app.register_blueprint(payment_blueprint, url_prefix="/payment")
    
    db .init_app(app)
    migrate = Migrate(app, db,compare_type=True)
    return app
