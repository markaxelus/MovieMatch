from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movie
from .serializers import MovieSerializer
from .utils import fetch_and_update_movie_metadata

# Create your views here.

@api_view(['POST'])
def fetch_movie_metadata(request):
    imdb_id = request.data.get('imdb_id')
    if not imdb_id:
        return Response({"error": "IMDB ID is required"}, status=400)
    
    movie = fetch_and_update_movie_metadata(imdb_id)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)
