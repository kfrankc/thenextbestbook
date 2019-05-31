import os
from app import create_app,db
from pymongo import MongoClient


if __name__ == '__main__':
    port = int(os.environ.get("PORT",8080))
    app = create_app()
    app.run('0.0.0.0',port=port)