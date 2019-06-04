import tempfile
import pytest
import os
import sys
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from app import create_app


@pytest.fixture
def client():

    client = create_app(None).test_client()
    yield client



def test_config():
   """Test create_app without passing test config."""
   assert not create_app(None).testing

@pytest.mark.usefixtures('client_class')
def test_hello(client):
   response = client.get('/hello')
   print(response.data)
   assert response.data == b'Hello World!'
