from django.db import models
#from imdb import IMDb

# Create your models here.

class Movie(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    #image = models.ImageField(upload_to='movie')
    genres = models.CharField(max_length=50)
    language = models.CharField(max_length=2)
    region = models.CharField(max_length=2)
    year = models.DateField()

    
class Recommendation(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    score = models.FloatField()