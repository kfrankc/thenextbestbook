from pymongo import MongoClient
from subprocess import call
from bson import Code


# Data transfer to cluster
call(".mongo_import.sh", shell = True)


# Connection String
client = pymongo.MongoClient("mongodb://<user>:<pass>@thenextbook-shard-00-00-p3g7n.mongodb.net:27017,thenextbook-shard-00-01-p3g7n.mongodb.net:27017,thenextbook-shard-00-02-p3g7n.mongodb.net:27017/test?ssl=true&replicaSet=TheNextBook-shard-0&authSource=admin&retryWrites=true&w=majority")
db = client.reviews


# Data type conversion/clean up
collection = db["gr_books"]
self.collection.find().forEach(Code( '''function(x) 
    {db.gr_books.update(
        {"_id":x._id}, 
        {"$set":{"ratings_count":parseInt(x.ratings_count)}}
    )
}'''))

self.collection.find().forEach(Code( '''function(x) 
    {db.gr_books.update(
        {"_id":x._id}, 
        {"$set":{"text_reviews_count":parseInt(x.ratings_count)}}
    )
}'''))

self.collection.find().forEach(Code( '''function(x) 
    {db.gr_books.update(
        {"_id":x._id}, 
        {"$set":{"average_rating":parseFloat(x.ratings_count)}}
    )
}'''))


# Indexing Steps:
collection = db["az_reviews"]
collection.create_index("reviewerID")
collection.create_index("asin")

collection = db["az_ratings"]
collection.create_index("reviewerID")
collection.create_index("asin")

collection = db["gr_books"]
collection.create_index("isbn")
collection.create_index("asin")
collection.create_index("title")
collection.create_index("book_id")

# Final Dataset
self.collection.find().forEach(Code( '''
    (function(obj){ 
   db.gr_books.insert(obj)
}'''))
