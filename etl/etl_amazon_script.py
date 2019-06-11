import etl_amazon as ea

# Initiate Spark Session
# conf = SparkConf().setMaster("local").setAppName("temp")
etl = ea.ETL_Amazon()

# Create variable 'book' to store book review JSON object
books = etl.readJSON("/Users/frankchen/Desktop/reviews_Books_5.json.gz")

# Create variable 'metadata' to store metadata JSON object
metadata = etl.readJSON("/Users/frankchen/Desktop/metadata.json.gz")

# Create global variables for spark SQL command
books.createGlobalTempView("books")
metadata.createGlobalTempView("metadata")

# Create variable 'booksWithTitle' to store result of SQL
# query that joins books and its metadata by asin code
booksWithTitle = etl.sqlQuery(
    "SELECT b.asin, b.overall, m.title"
    "FROM global_temp.books b, global_temp.metadata m"
    "WHERE b.asin = m.asin")

# Save result to JSON folder
booksWithTitle.write.format('json').save("./booksWithTitleJSON")
