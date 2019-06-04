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

def test_mongodb(client):
   """Test mongodb api"""
   response = client.get('/books/papillon')
   print(response.data)
   assert response.data == b'[{"book_id": "19048265", "title": "Papillon", "name": "Henri Charriere", "title_author": "Papillon - Henri Charriere"}, {"book_id": "20383331", "title": "Papillon", "name": "Henri Charriere", "title_author": "Papillon - Henri Charriere"}, {"book_id": "22575360", "title": "Le scaphandre et le papillon", "name": "Jean-Dominique Bauby", "title_author": "Le scaphandre et le papillon - Jean-Dominique Bauby"}]'

