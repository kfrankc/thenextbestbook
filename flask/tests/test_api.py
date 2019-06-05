import tempfile
import pytest
import os
import sys
from app import create_app
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))



@pytest.fixture
def client():
    client = create_app(None).test_client()
    yield client

def test_mongodb(client):
   """Test mongodb api"""
   response = client.get('/books/papillon')
   print(response.data)
   assert response.data == b'[{"book_id": "19048265", "title": "Papillon", "name": "Henri Charriere", "title_author": "Papillon - Henri Charriere"}]'

