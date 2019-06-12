import unittest
import numpy as np
from recommendationengine.recommendation_engine import RecommendationEngine


class TestRecommendationEngine(unittest.TestCase):

    def setUp(self):
        """
        :return: creates an instance of the Recommendation engine class
        """
        RecommendationEngine.INPUT_FILE = 'https://tinyurl.com/yy4ekppg'
        self.recommendation_engine = RecommendationEngine()

    def test_data_size(self):
        """

        :return: checks if the dataset has expected number of rows and columns
        """
        n_rows, n_cols = self.recommendation_engine.data.shape
        self.assertEqual(n_cols, 3)
        self.assertEqual(n_rows, 1000)

    def test_no_na_fields(self):
        """

        :return: checks for null values in the data
        """
        has_nan = np.all(self.recommendation_engine.data.isna())
        self.assertFalse(has_nan)

    def test_ratings_fields(self):
        """

        :return: checks if the ratings are in range (1,5)
        """
        has_less_0_rating = np.all(self.recommendation_engine.data.rating >= 0)
        has_gtr_5_rating = np.all(self.recommendation_engine.data.rating <= 5)
        self.assertTrue(has_gtr_5_rating)
        self.assertTrue(has_less_0_rating)

    def test_data_column_names(self):
        """

        :return: checks if the columns name are in order required by scikit-surprise
        """
        column_names = list(self.recommendation_engine.data.columns)
        self.assertEqual(column_names, RecommendationEngine.ORDERED_COLUMNS)

    def test_recommendations(self):
        """

        :return: check if the generated recommendations have ratings on the same scale as input data
        """
        self.recommendation_engine.train_svd()
        top_10 = self.recommendation_engine.get_top_n(10)
        for k, v in top_10.items():
            for book in v:
                self.assertIsInstance(book[0], str)
                self.assertIsInstance(book[1], float)

                self.assertGreater(book[1], 0)
                self.assertLessEqual(book[1], 5)
