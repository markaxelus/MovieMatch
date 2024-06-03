# Generated by Django 5.0.6 on 2024-06-01 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='imdb_id',
            field=models.CharField(blank=True, max_length=20, null=True, unique=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='imdb_rating',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='imdb_votes',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]