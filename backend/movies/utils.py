import imdb
from .models import Movie

def fetch_and_update_movie_metadata(imdb_id):
    ia = imdb.Cinemagoer()
    movie = ia.get_movie(imdb_id)
    
    title = movie.get('title')
    description = movie.get('plot outline')
    release_date = movie.get('year')
    imdb_rating = movie.get('rating')
    imdb_votes = movie.get('votes')

    movie_obj, created = Movie.objects.update_or_create(
        imdb_id=imdb_id,
        defaults={
            'title': title,
            'description': description,
            'release_date': release_date,
            'imdb_rating': imdb_rating,
            'imdb_votes': imdb_votes
        }
    )
    return movie_obj