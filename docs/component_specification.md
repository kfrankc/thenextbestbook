# Component Specification

## Software components

- Data Collector and Aggregator
- Recommendation Engine
- Web Back-end
- Web Front-end

High level description of the software components such as: data manager, which provides a simplified interface to your data and provides application specific features (e.g., querying data subsets); and visualization manager, which displays data frames as a plot. Describe at least 3 components specifying: what it does, inputs it requires, and outputs it provides.

## Interactions to accomplish use cases

Describe how the above software components interact to accomplish at least one of your use cases.

## Preliminary plan

1) Request product metadata access from Amazon and obtain data from Goodreads
2) Combine Amazon ratings data with Goodreads based on the book title
3) Generate users vs books matrix for colloborative filtering (rows - users, columns - books, values - ratings)
4) Build, train and test the colloborative filtering model 
5) Expose the model in the form of RESTful API's. (input - book title/author, user ; output - list of book recommendations)
6) Build an intuitive UI to serve the recommendations
