import mysql.connector
import json

def load_json_to_mysql(json_file_path, db_config):
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()

    # Prepare SQL query to insert data into the table
    sql = '''
    INSERT INTO imdb_data (
        `index`, `tconst`, `titleType`, `primaryTitle`, `originalTitle`, 
        `isAdult`, `startYear`, `endYear`, `runtimeMinutes`, `genres`, 
        `averageRating`, `numVotes`, `ordering`, `title`, `region`, 
        `language`, `types`, `attributes`, `isOriginalTitle`, `description`
    ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    '''
    
    for row in data:
        cursor.execute(sql, (
            row.get('index'),
            row.get('tconst'),
            row.get('titleType'),
            row.get('primaryTitle'),
            row.get('originalTitle'),
            row.get('isAdult'),
            row.get('startYear'),
            row.get('endYear'),
            row.get('runtimeMinutes'),
            row.get('genres'),
            row.get('averageRating'),
            row.get('numVotes'),
            row.get('ordering'),
            row.get('title'),
            row.get('region'),
            row.get('language'),
            row.get('types'),
            row.get('attributes'),
            row.get('isOriginalTitle'),
            row.get('Description', 'No description available')    # Provide a default value if 'description' is missing
        ))

    conn.commit()
    cursor.close()
    conn.close()

# Database configuration
db_config = {
    'user': 'moviematchsql',
    'password': 'moviematchsql',
    'host': 'localhost',
    'database': 'moviematch'
}

# Load JSON data into MySQL
json_file_path = '/Users/arc2106/Desktop/Career/MovieMatch/backend/data/IMDB.json'
load_json_to_mysql(json_file_path, db_config)
