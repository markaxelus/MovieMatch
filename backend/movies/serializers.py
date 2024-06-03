from rest_framework import serializers
from .models import Movie, Recommendation

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"
        
class RecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"
        