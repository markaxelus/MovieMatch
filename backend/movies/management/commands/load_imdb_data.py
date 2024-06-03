import os
import csv
from datetime import datetime
from django.core.management.base import BaseCommand
from movies.models import Movie
from django.conf import settings

class Command(BaseCommand):
    help = 'Load IMDB data into the Movie model'

    def handle(self, *args, **kwargs):
        file_path = os.path.join(settings.BASE_DIR, 'data', 'title.basics.tsv')
        with open(file_path, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file, delimiter='\t')
            for row in reader:
                if row['titleType'] == 'movie':  # Only process movies
                    release_date = None
                    if row['startYear'] != '\\N':
                        try:
                            # Convert year to full date, assuming January 1st of that year
                            release_date = datetime(int(row['startYear']), 1, 1).date()
                        except ValueError:
                            self.stdout.write(self.style.ERROR(f"Invalid date format for {row['primaryTitle']}: {row['startYear']}"))
                    
                    Movie.objects.update_or_create(
                        imdb_id=row['tconst'],
                        defaults={
                            'title': row['primaryTitle'],
                            'description': row['primaryTitle'],  # Use title as placeholder
                            'release_date': release_date,
                            'category': 'A',  # Placeholder category
                            'language': 'EN'  # Placeholder language
                        }
                    )
        self.stdout.write(self.style.SUCCESS('Data loaded successfully'))
