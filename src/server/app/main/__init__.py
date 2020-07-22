from flask import Flask
from flask_cors import CORS
from config import app_config
from .routes import guest as guest_blueprint
from .models import db
from flask_migrate import Migrate


def create_app(config_name):
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    app.config.from_object(app_config[config_name])
    app.config.from_pyfile("config.py")

    app.register_blueprint(guest_blueprint, url_prefix="/guest")
    db .init_app(app)
    migrate = Migrate(app, db)
    return app
