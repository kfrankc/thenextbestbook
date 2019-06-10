from pyspark import SparkConf, SparkContext
from pyspark.sql import SparkSession


class ETL_Amazon():
    # Initialize ETL_Amazon Object
    def __init__(self):
        self.spark = SparkSession.builder.appName(
            "Python Spark SQL basic example").getOrCreate()

    # read JSON function
    # input: file location string
    # return: spark object containing content of file
    def readJSON(self, file):
        return self.spark.read.option('compression', 'gzip').json(file)

    # sql_query function
    # input: sql command
    # return: spark object containing content of SQL command response
    def sql_query(self, sql_cmd):
        return self.spark.sql(sql_cmd)
