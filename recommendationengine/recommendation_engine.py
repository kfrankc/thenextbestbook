import pickle
from collections import defaultdict

import pandas as pd
from surprise import Dataset
from surprise import Reader
from surprise import SVD
from surprise.model_selection import train_test_split


class RecommendationEngine:
    """

    """

    INPUT_FILE = 'output2.csv'
    COLUMN_NAMES = ['book_id', 'user_id', 'rating']
    ORDERED_COLUMNS = ['user_id', 'book_id', 'rating']
    RATING_SCALE = (1, 5)
    MODEL_FILENAME = 'pickle_model.pkl'

    def __init__(self):
        self.clazz = RecommendationEngine
        self.data = self.get_data()
        self.train_set, self.test_set = self.split_data()
        self.model = None
        self.user_predictions = None

    def get_data(self):
        """

        :return: Formatted data frame with columns in the required format
        """
        data = pd.read_csv(self.clazz.INPUT_FILE, header=None)
        data.columns = self.clazz.COLUMN_NAMES
        data = data[self.clazz.ORDERED_COLUMNS]
        return data

    def split_data(self):
        """
        :return: data split in train test
        """
        reader = Reader(rating_scale=self.clazz.RATING_SCALE)
        dataset = Dataset.load_from_df(self.data[self.clazz.ORDERED_COLUMNS], reader)
        train, test = train_test_split(dataset, test_size=.30)
        return train, test

    def train_svd(self):
        """
        :return: trained SVD model stored using pickle module
        """
        model = SVD(n_factors=100)
        model.fit(self.train_set)
        pkl_filename = self.clazz.MODEL_FILENAME
        with open(pkl_filename, 'wb') as file:
            pickle.dump(model, file)

        # Load from file
        with open(pkl_filename, 'rb') as file:
            pickle_model = pickle.load(file)
        self.model = pickle_model

    def __generate_predictions__(self):
        """
        :param model: trained model stored using pickle module
        :param test: list of user ids
        :return: prediction/recommendations for new/existing user
        """
        user_predictions = self.model.test(self.test_set)
        self.user_predictions = user_predictions

    def get_top_n(self, n=10):
        """Return the top-N recommendation for each user from a set of predictions.

        Args:
            user_predictions(list of Prediction objects): The list of predictions, as
                returned by the test method of an algorithm.
            n(int): The number of recommendation to output for each user. Default
                is 10.

        Returns:
        A dict where keys are user (raw) ids and values are lists of tuples:
            [(raw item id, rating estimation), ...] of size n.
        """
        # First map the predictions to each user.
        if self.user_predictions is None:
            self.__generate_predictions__()

        top_n = defaultdict(list)
        for uid, iid, true_r, est, _ in self.user_predictions:
            top_n[uid].append((iid, est))

        # Then sort the predictions for each user and retrieve the k highest ones.
        for uid, user_ratings in top_n.items():
            user_ratings.sort(key=lambda x: x[1], reverse=True)
            top_n[uid] = user_ratings[:n]

        return top_n
