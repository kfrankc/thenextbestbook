""" Class to perform etl transformations on goodreads data """
from pyspark.sql import SparkSession


class ETLGoodreads():
    """ ETL goodreads class"""

    def __init__(self):
        self.spark = SparkSession.builder.appName(
            "Goodreads books authors merge").getOrCreate()

    def read_json(self, file):
        """
        Reads json from a file

        :param file: location string of .json file
        :return: spark object containing content of file
        """
        return self.spark.read.json(file)

    def sql_query(self, sql_cmd):
        """
        Runs a sql query on the spark dataframe
        
        :param sql_cmd: SQL query in string variable
        :return: spark object containing content of SQL query
        """
        return self.spark.sql(sql_cmd)

    def join_books_with_authors(self):
        """
        runs the join query on books and authors dataset
        :return: joined spark rdd
        """
        return self.sql_query(
            "SELECT b.book_id,b.asin, b.average_rating, b.description, b.isbn,b.language_code,"
            "b.title_without_series, kindle_asin,"
            "b.link, b.ratings_count, b.similar_books,  b.url, b.image_url, "
            "b.title,a.name FROM global_temp.books b, global_temp.authors a"
            " where b.authors.author_id[0] = a.author_id")
