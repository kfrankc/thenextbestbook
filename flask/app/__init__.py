from flask import Flask,g
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

def create_app():
    app = Flask(__name__,static_url_path='')
    app.debug = True
    from app.controllers.books import mod
    app.register_blueprint(mod)

    client = MongoClient("mongodb://127.0.0.1:27017/")
    db = client.test
    print(db.books.find_one({}))
    return app
#db = Connection()

