from pyspark import SparkConf, SparkContext
from pyspark.sql import SparkSession


class ETLAmazon():
    # Initialize ETLAmazon Object
    def __init__(self):
        self.spark = SparkSession.builder.appName(
            "Python Spark SQL basic example").getOrCreate()

    def readJSON(self, file):
        """
        readJSON function
        Input:
            - file: location string of .gz file
        Return:
            - spark object containing content of file
        """
        return self.spark.read.option('compression', 'gzip').json(file)

    def sqlQuery(self, sql_cmd):
        """
        sqlQuery function
        Input:
            - sql_cmd: SQL query in string variable
        Return:
            - spark object containing content of SQL query
        """
        return self.spark.sql(sql_cmd)
