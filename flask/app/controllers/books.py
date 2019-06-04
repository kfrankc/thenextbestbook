from flask import Blueprint,render_template,send_file,jsonify
from bson.json_util import dumps

from flask import current_app
from app import get_db
import json
import re


mod = Blueprint('users',__name__,static_folder="../static",url_prefix='')


@mod.route('/')
def main():
	return mod.send_static_file("index.html")


@mod.route('/books/<bookname>')
def get_book_titles(bookname):
	print(bookname)
	db = get_db()
	books = db.books.find({"$text": {"$search": "\""+bookname+"\""}, "similar_books":
		{"$exists": True, "$not": {"$size": 0}}},
				  {"title": 1,"book_id":1,"name":1,"_id":False}).limit(10)
	regx = re.compile('/.*siddhar.*/', re.IGNORECASE)
	books2 = []
	if books.count() == 0:
		books2 = db.books.find({"title": {"$regex": ".*"+bookname+".*",'$options' : 'i'}},
				  {"title": 1,"book_id":1,"name":1}).limit(10)
	search_results = []
	for document in books:
		document["title_author"] = document["title"] + " - " + document["name"]
		search_results.append(document)
	if books.count != 0:
		for document in books2:
			print("iterating through books", document["title"])
			document["title_author"] = document["title"] + " - " + document["name"]
			search_results.append(document)
	print("before search_results")
	print(dumps(search_results))
	return dumps(search_results)


@mod.route('/books/similarbooks/<bookid>')
def get_book_recommendations(bookid):

	db = get_db()
	book_data = db.books2.find({"book_id":bookid},{"similar_books": 1})
	similar_books=[]
	for book in book_data:
		similar_books = book["similar_books"]

	recommendations = db.books2.find({"book_id" : {"$in": similar_books}})

	results =[]
	for rec in recommendations:
		results.append(rec)
	print(results)
	return dumps(results)