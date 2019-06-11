""" Python script to start the flask application on localhost """
import os
from app import create_app
import config as C


if __name__ == '__main__':
    # Fetch port number from environment, else fetch from constants
    port = int(os.environ.get("PORT", C.PORT))
    app = create_app()

    # Run Flask App
    app.run(C.HOST, port=port)
