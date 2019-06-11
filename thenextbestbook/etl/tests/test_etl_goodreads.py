""" Test cases for ETLGoodreads class """

import os
import sys
import unittest
# To make etl_goodreads discoverable by tests
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import etl_goodreads as eg


class MyTest(unittest.TestCase):

    def test_join_books_with_authors(self):
        """
        runs join books with authors on test data with one book and author record
        """
        etl = eg.ETLGoodreads()
        books = etl.read_json("thenextbestbook/etl/tests/data/test_goodreads_books.json")
        authors = etl.read_json("thenextbestbook/etl/tests/data/test_goodreads_book_authors.json")
        books.createGlobalTempView("books")
        authors.createGlobalTempView("authors")

        # Test sql query
        books_with_authors = etl.join_books_with_authors()
        books_with_authors = books_with_authors.toPandas()

        self.assertEqual(int(books_with_authors.shape[0]), 1)


if __name__ == '__main__':
    unittest.main()
