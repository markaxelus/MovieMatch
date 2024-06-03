import pandas as pd
import json

# Load the CSV file
csv_file = 'IMDB.csv'
df = pd.read_csv(csv_file)

# Convert the DataFrame to a JSON string
json_data = df.to_json(orient='records')

# Save JSON string to a file (optional)
with open('IMDB.json', 'w') as json_file:
    json_file.write(json_data)
