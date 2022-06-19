from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['123123'] = 'key'
    
    from .views import views

    app.register_blueprint(views, url_prefix='/')
    
    return app