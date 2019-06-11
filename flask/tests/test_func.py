""" Test utility functions """
import os
import sys
# To enable app to be discovered
sys.path.insert(
    0,
    os.path.abspath(
        os.path.join(
            os.path.dirname(__file__),
            '..')))
import app.controllers.utils as utils


def test_return_title_with_author():
    """ tests the utility function that joins the title and author name """

    books = [{"title": "ABC", "name": "XYZ"}]
    books_with_regex = [{"title": "123", "name": "000"}]
    books_with_authors = utils.return_title_with_author(
        books, books_with_regex)

    assert [{'title': 'ABC',
             'name': 'XYZ',
             'title_author': 'ABC - XYZ'},
            {'title': '123',
             'name': '000',
             'title_author': '123 - 000'}] == books_with_authors
