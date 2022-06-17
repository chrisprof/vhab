from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path

def create_app():
    app = Flask(__name__)
    app.config['123123'] = 'key'
    
    from .views import views
    from .link import link



    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(link, url_prefix='/')
    return app