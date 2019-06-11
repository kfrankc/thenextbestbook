import os
import sys
from subprocess import check_output
import pandas as pd
import unittest
# To make etl_amazon discoverable by tests
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import etl_goodreads as eg


class MyTest(unittest.TestCase):
    def test_read_row(self):
        etl = eg.ETLGoodreads()
        test_file = etl.read_json("thenextbestbook/etl/tests/data/test_file.json.gz")
        test_file_pd = test_file.toPandas()
        test_file_truth = pd.read_json("thenextbestbook/etl/tests/data/test_file.json")
        self.assertEqual(test_file_pd.shape[0], test_file_truth.shape[0])

    def test_read_col(self):
        etl = eg.ETLGoodreads()
        test_file = etl.read_json("thenextbestbook/etl/tests/data/test_file.json.gz")
        test_file_pd = test_file.toPandas()
        test_file_truth = pd.read_json("thenextbestbook/etl/tests/data/test_file.json")
        self.assertEqual(test_file_pd.shape[1], test_file_truth.shape[1])

    def test_join_books_with_authors(self):
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
