""" utility functions """


def return_title_with_author(books, books_with_regex):
    """

    :param books:
    :param books_with_regex:
    :return:
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
