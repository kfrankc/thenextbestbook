# Component Specification

## Software components

- Data Collector and Aggregator
This system is responsible for three major functionalities. 
Extract - the data collector acquires data from Amazon and goodreads datasets.
Transform - join the datasets based on the book title and append amazon ratings to goodreads ratings data
Load - Generate a users vs books matrix and store it as a csv file or in a database.

- Recommendation Engine
A collaborative filtering model is designed to provide user-item and item-item recommendations. The model takes in the users vs books matrix as input and generates a list of recommended books as the output. 

- Application Back-end
Exposes the model and the books database in the form of RESTful API's for interaction with the outside world. The inputs to the API include queries such as the book title, author, genre, and userId. The API's output information with regards to a particular book and also outputs a list of recommendations to the user.

- Application Front-end
A User Interface for the users to interact with the recommendation engine. The UI receives inputs from the user in the form of clicks and form data, and outputs the suitable results fetched from the application back-end. 

## Interactions to accomplish use cases

1) Use Case:
Receive recommendations based on a book/author input by the user 

The user interacts with the application front-end to input a book title or an author name in the form field. Upon clicking submit the data is sent to the Application back-end which processes the form data and sends it to the recommendation engine. The recommendation engine generates a list of books which are then sent back to the application front end. The front end then displays this list of books back to the user. 

2) Use case: 
Users can view more information about the book they are interested in. 

The user selects a book title that they are interested in on the application front-end. This dispatches an API call to the application back-end which fetches more information about the book from the datastore. This information is then transmitted back to the front-end which displays it appropriately on the UI.

## Preliminary plan

- [X] Request product metadata access from Amazon and obtain data from Goodreads 
- [ ] Combine Amazon ratings data with Goodreads based on the book title 
- [ ] Generate users vs books matrix for colloborative filtering (rows - users, columns - books, values - ratings)
- [ ] Build, train and test the colloborative filtering model 
- [ ] Expose the model in the form of RESTful API's. (input - book title/author, user ; output - list of book recommendations)
- [ ] Build an intuitive UI to serve the recommendations
