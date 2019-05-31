from flask import Blueprint,render_template,send_file,jsonify
from bson.json_util import dumps
from flask import current_app
from app import get_db
import json

mod = Blueprint('users',__name__,static_folder="../static",url_prefix='')

@mod.route('/')
def main():
	return mod.send_static_file("index.html")

@mod.route('/user/')
def user_visit():
	db = get_db()
	user = db.books.find_one({})

	print(user)
	return dumps(user)