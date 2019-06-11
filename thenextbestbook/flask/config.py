""" config.py - Store's application level flask configs """
# Application port number
PORT = 8080

# Application host IP
HOST = "0.0.0.0"

# Static directory path
STATIC_FILE_PATH = "/static"

# Enable debug mode.
DEBUG = True

# MongoDB URL
MONGODB_HOST = "127.0.0.1"
MONGODB_PORT = "27017"
MONGODB_DATABASE_URI = "mongodb://" + MONGODB_HOST + ":" + MONGODB_PORT
