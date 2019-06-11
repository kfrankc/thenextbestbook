""" Class to perform etl transformations on Amazon data """
from pyspark.sql import SparkSession


class ETLAmazon:
    # Initialize ETL_Amazon Object
    def __init__(self):
        self.spark = SparkSession.builder.appName(
            "Python Spark SQL basic example").getOrCreate()

    def read_json(self, file):
        """
        read_json function
        Input:
            - file: location string of .gz file
        Return:
            - spark object containing content of file
        """
        return self.spark.read.option('compression', 'gzip').json(file)

    def sql_query(self, sql_cmd):
        """
        sql_query function
        Input:
            - sql_cmd: SQL query in string variable
        Return:
            - spark object containing content of SQL query
        """
        return self.spark.sql(sql_cmd)

    def get_title_on_asin(self):
        """
        runs the join query on metadata and reviews dataset
        :return: joined spark rdd
        """
        return self.sql_query(
            "SELECT b.asin, b.overall, m.title "
            "FROM global_temp.books b, global_temp.metadata m "
            "WHERE b.asin = m.asin")

