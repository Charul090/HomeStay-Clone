from flask import Flask
from flask_cors import CORS
from config import app_config
from .routes import guest as guest_blueprint,host as host_blueprint,oauth as oauth_blueprint
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
    
    db .init_app(app)
    migrate = Migrate(app, db)
    return app
