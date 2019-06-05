from flask import Flask,g
from flask_cors import CORS
from pymongo import MongoClient


db = None

def get_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(g, 'mongo_db'):
        client = MongoClient("mongodb://127.0.0.1:27017/")
        g.db = client.test
    return g.db

def create_app(config):
    app = Flask(__name__,static_url_path='')
    CORS(app)
    app.debug = True
    from app.controllers.books import mod
    app.register_blueprint(mod)

    @app.route('/hello')
    def hello_world():
        return 'Hello World!'

    app.add_url_rule('/', endpoint='index')

    return app
#db = Connection()

