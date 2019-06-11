""" utility functions """


def return_title_with_author(books, books_with_regex):
    """
    Adds title_author key to the dict object by combining title and author

    :param books: array of books
    :param books_with_regex: array of books
    :return: books with new key 'title_author'
    """
    search_results = []

    for document in books:
        document["title_author"] = document["title"] + " - " \
                                   + document["name"]
        search_results.append(document)

    if books.count != 0:
        for document in books_with_regex:
            document["title_author"] = document["title"] + \
                                       " - " + document["name"]
            search_results.append(document)

    return search_results
