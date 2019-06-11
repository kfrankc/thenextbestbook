""" Controller for books API """
from flask import Blueprint
from bson.json_util import dumps
from app import get_db
import app.controllers.utils as utils
from app.models.books import BooksCollection

# register routes for books
mod = Blueprint('books', __name__)


@mod.route('/books/<book_name>')
def get_book_titles(book_name):
    """
    API to fetch book titles from search query

    :param book_name: type (string)
    :return: array of book titles
    """
    # Fetch mongodb object
    db = get_db()

    # Search for exact match
    books_collection = BooksCollection(db.books)
    books = books_collection.get_books_by_title(book_name)

    # If no books found, search with regex
    books_with_regex = []
    if books.count() == 0:
        books_with_regex = books_collection.get_books_by_regex(book_name)

    search_results = utils.return_title_with_author(books, books_with_regex)

    return dumps(search_results)


@mod.route('/books/similarBooks/<book_id>')
def get_book_recommendations(book_id):
    """
    API to fetch similar books based on input book_id

    :param book_id: type (string)
    :return: array of similar books
    """
    db = get_db()
    books_collection = BooksCollection(db.books2)

    # Fetch similar books for a book_id
    book_data = books_collection.get_similar_books_by_book_id(book_id)

    # Store all similar_books in an array
    similar_books = []
    for book in book_data:
        similar_books = book["similar_books"]

    recommendations = books_collection.get_books_details(similar_books)

    return dumps(recommendations)
