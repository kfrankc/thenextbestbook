""" Test mongoDb queries """
from bson.json_util import dumps
import os
import sys
import mongomock
import copy
# To enable books to be discovered by test cases
sys.path.insert(
    0,
    os.path.abspath(
        os.path.join(
            os.path.dirname(__file__),
            '..')))
from app.models.books import BooksCollection


def test_regex_search():
    """
    Tests regex search on books collection
    """
    # Inserting documents to the mock collection
    collection = mongomock.MongoClient().db.collection
    objects = [{"title": "title_1"}, {"title": "title_2"}]
    for obj in objects:
        obj['_id'] = collection.insert_one(obj)
    
    # call the class method
    books_collection = BooksCollection(collection)
    result = books_collection.get_books_by_regex("title_1")

    assert dumps(result) == '[{"title": "title_1"}]'


def test_similar_books():
    """
    Test fetch similar_books for the given book_id
    """
    # Inserting documents to the mock collection
    collection = mongomock.MongoClient().db.collection
    objects = [{"book_id": "AB123LTPL", "title": "title_1",
                "similar_books": ["123", "456", "768"]}]
    for obj in objects:
        obj['_id'] = collection.insert_one(obj)

    # call the class method
    books_collection = BooksCollection(collection)
    result = books_collection.get_similar_books_by_book_id("AB123LTPL")

    assert  dumps(result) == '[{"similar_books": ["123", "456", "768"]}]'


def test_get_books_details_by_id():
    """
    Test get all book details for given book id's
    """
    # Inserting documents to the mock collection
    collection = mongomock.MongoClient().db.collection
    objects = [{"book_id": "123", "title": "title_1"},
               {"book_id": "456", "title": "title_2"},
               {"book_id": "789", "title": "title_3"}]
    original_objects = copy.deepcopy(objects)
    for obj in objects:
        collection.insert_one(obj)
    
    # call the class method
    books_collection = BooksCollection(collection)
    result = books_collection.get_books_details(["123", "456", "789"])
    
    assert list(result) == original_objects

