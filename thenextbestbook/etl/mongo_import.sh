brew tap mongodb/brew

if brew ls --versions mongodb-community@4.0 > /dev/null; then
	:
else
	brew install mongodb-community@4.0
fi

brew services start mongodb-community@4.0

mongoimport --host TheNextBook-shard-0/thenextbook-shard-00-00-p3g7n.mongodb.net:27017,thenextbook-shard-00-01-p3g7n.mongodb.net:27017,thenextbook-shard-00-02-p3g7n.mongodb.net:27017 --ssl --username testu --authenticationDatabase admin --db reviews --collection gr_books --file data/goodreads_books.json --numInsertionWorkers 8

mongoimport --host TheNextBook-shard-0/thenextbook-shard-00-00-p3g7n.mongodb.net:27017,thenextbook-shard-00-01-p3g7n.mongodb.net:27017,thenextbook-shard-00-02-p3g7n.mongodb.net:27017 --ssl --username testu --authenticationDatabase admin --db reviews --collection az_ratings --type csv --file data/ratings_Books.csv --columnsHaveTypes --fields "reviewerID.string(), asin.string(), overall.decimal(), unixRatingTime.int64()" --numInsertionWorkers 8

mongoimport --host TheNextBook-shard-0/thenextbook-shard-00-00-p3g7n.mongodb.net:27017,thenextbook-shard-00-01-p3g7n.mongodb.net:27017,thenextbook-shard-00-02-p3g7n.mongodb.net:27017 --ssl --username testu --authenticationDatabase admin --db reviews --collection az_reviews --type json --file data/reviews_Books_5.json
