""" Class to perform etl transformations on Amazon data """
from pyspark.sql import SparkSession


class ETLAmazon:
    """ ETL Amazon class"""

    def __init__(self):
        self.spark = SparkSession.builder.appName(
            "Python Spark SQL basic example").getOrCreate()

    def read_json(self, file):
        """
        Reads from compressed json file

        :param file: location string of .json.gz file
        :return: spark object containing content of file
        """
        return self.spark.read.option('compression', 'gzip').json(file)

    def sql_query(self, sql_cmd):
        """
        Runs a sql query on the spark dataframe

        :param sql_cmd: SQL query in string variable
        :return: spark object containing content of SQL query
        """
        return self.spark.sql(sql_cmd)

    def get_title_on_asin(self):
        """
        Runs the join query on metadata and reviews dataset
        
        :return: joined spark rdd
        """
        # query that joins books and its metadata by asin code
        return self.sql_query(
            "SELECT b.asin, b.overall, m.title "
            "FROM global_temp.books b, global_temp.metadata m "
            "WHERE b.asin = m.asin")
