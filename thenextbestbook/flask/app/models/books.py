""" Books Collection class """
class BooksCollection:

    def __init__(self, collection):
        self.collection = collection

    def get_books_by_title(self, book_name):
        """
        Performs a regular text search on the book title

        :param book_name: type (string)
        :return: array of book titles that match the search query
        """
        books = self.collection.find({"$text": {"$search": "\"" + book_name + "\""},
                                      "similar_books": {"$exists": True,
                                                        "$not": {"$size": 0}}},
                                     {"title": 1,
                                      "book_id": 1,
                                      "name": 1,
                                      "_id": False}).limit(30)
        return books

    def get_books_by_regex(self, book_name):
        """
        Performs a regex search on the book title

        :param book_name: type (string)
        :return: array of book title that matches the regular expression
        """
        books_with_regex = self.collection.find(
            {
                "title": {
                    "$regex": ".*" +
                    book_name +
                    ".*",
                    '$options': 'i'}},
            {
                "title": 1,
                "book_id": 1,
                "name": 1,
                "_id": False}).limit(10)
        return books_with_regex

    def get_similar_books_by_book_id(self, book_id):
        """
        Fetches similar book ids based on book id

        :param book_id: type (string)
        :return: array of similar books
        """
        similar_books = self.collection.find(
            {"book_id": book_id}, {"similar_books": 1, "_id": False})
        return similar_books

    def get_books_details(self, similar_books):
        """
        Fetches books details given an array of book ids

        :param similar_books: array ([string])
        :return: array of books
        """
        books_details = self.collection.find(
            {"book_id": {"$in": similar_books}}, {"_id": False})
        return books_details
