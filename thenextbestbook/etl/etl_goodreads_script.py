""" script to run transformations on goodreads data"""
import etl_goodreads as eg
import constants as ct

# Initiate Spark Session
etl = eg.ETLGoodreads()

# Create variable 'book' to store books JSON object
books = etl.read_json(ct.GOODREADS_BOOKS_JSON)

# Create variable 'authors' to store authors JSON object
authors = etl.read_json(ct.GOODREADS_BOOKS_AUTHORS)

# Create global variables for spark SQL command
books.createGlobalTempView("books")
authors.createGlobalTempView("authors")

# Create variable 'books_with_authors' to store result of SQL
books_with_authors = etl.join_books_with_authors()

# Save result to JSON folder
books_with_authors.write.format('json').save(ct.GOODREADS_BOOKS_AUTHORS_DESTINATION)
