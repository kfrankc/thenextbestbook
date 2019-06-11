""" Module to register flask routes and to create the database connection """

from flask import Flask, g
from flask_cors import CORS
from pymongo import MongoClient
import config as C


def get_db():
    """
    Opens a new database connection if there is none yet for the
    current application context.

    :return: mongodb object
    """

    if not hasattr(g, 'mongo_db'):
        client = MongoClient(C.MONGODB_DATABASE_URI)
        g.db = client.test
    return g.db


def create_app():
    """
    Creates the application object and registers the book controller with the app

    :return: Flask app object
    """
    # Creates flask object with directory for to serve static files
    app = Flask(__name__, static_url_path=C.STATIC_FILE_PATH)

    # Enabling CORS for the application
    CORS(app)

    app.debug = True
    # Registering books controller
    from app.controllers.books import mod
    app.register_blueprint(mod)

    # Test Route
    @app.route('/hello')
    def hello_world():
        return 'Hello World!'

    # Index route - serves index.html
    @mod.route('/')
    def main():
        return mod.send_static_file("index.html")

    # serve routes from index by default
    app.add_url_rule('/', endpoint='index')

    return app
