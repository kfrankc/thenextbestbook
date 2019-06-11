""" application test cases """

import os
import sys
import pytest
# To enable app to be discovered
sys.path.insert(
    0,
    os.path.abspath(
        os.path.join(
            os.path.dirname(__file__),
            '..')))
from app import create_app


@pytest.fixture
def client():
    """
    Creates a dummy client to make API calls
    """
    client = create_app().test_client()
    yield client


def test_config():
    """
    Test create_app without passing test config.
    """
    assert not create_app().testing


@pytest.mark.usefixtures('client_class')
def test_hello(client):
    """ dummy API """
    response = client.get('/hello')
    assert response.data == b'Hello World!'
