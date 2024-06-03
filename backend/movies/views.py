from rest_framework import viewsets
from .models import Movie
from .serializers import MovieSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['genres', 'region', 'language', 'isAdult']
    search_fields = ['primaryTitle', 'originalTitle']
    
    def get_queryset(self):
        return Movie.objects.filter(titleType='movie')
