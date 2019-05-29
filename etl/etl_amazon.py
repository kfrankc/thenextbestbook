from pyspark import SparkConf, SparkContext
from pyspark.sql import SparkSession

conf = SparkConf().setMaster("local").setAppName("temp")
spark = SparkSession.builder.appName("Python Spark SQL basic example").getOrCreate()
books = spark.read.option('compression', 'gzip').json("/Users/frankchen/Desktop/reviews_Books_5.json.gz")

metadata = spark.read.option('compression', 'gzip').json("/Users/frankchen/Desktop/metadata.json.gz")

books.createGlobalTempView("books")
metadata.createGlobalTempView("metadata")

booksWithTitle = spark.sql("SELECT b.asin, b.overall, m.title FROM global_temp.books b, global_temp.metadata m"
          " where b.asin = m.asin")

# booksWithTitle.coalesce(1).write.format('json').save("./booksWithTitle.json")
booksWithTitle.write.format('json').save("./booksWithTitle.json")