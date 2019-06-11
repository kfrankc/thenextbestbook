""" script to run ETL on Amazon data """
import etl_amazon as ea
import constants as ct

# Initiate Spark Session
etl = ea.ETLAmazon()

# Create variable 'book' to store book review JSON object
books = etl.read_json(ct.AMAZON_BOOKS_JSON)

# Create variable 'metadata' to store metadata JSON object
metadata = etl.read_json(ct.AMAZON_METADATA_JSON)

# Create global variables for spark SQL command
books.createGlobalTempView("books")
metadata.createGlobalTempView("metadata")

# Create variable 'books_with_title' to store result of SQL
books_with_title = etl.get_title_on_asin()

# Save result to JSON folder
books_with_title.write.format('json').save(ct.AMAZON_REVIEWS_DESTINATION)
