import pandas as pd
import json

# Load Excel data into a DataFrame
df = pd.read_csv('mock_data.csv')

# Analyze data
total_count = len(df)
male_count = len(df[df['gender'].str.lower() == 'male'])
female_count = len(df[df['gender'].str.lower() == 'female'])

age_counts = df['age'].value_counts().to_dict()

prev_depressed_count = len(df[df['treatment_received'] == 'TRUE'])
currently_depressed_count = len(df[df['depression_score'] >= 50])
never_depressed_count = len(df[df['treatment_received'] == 'FALSE'])

# Store analysis results in a dictionary
analysis_results = {
    'total_count': total_count,
    'male_count': male_count,
    'female_count': female_count,
    'age_counts': age_counts,
    'prev_depressed_count': prev_depressed_count,
    'currently_depressed_count': currently_depressed_count,
    'never_depressed_count': never_depressed_count,
}

# Print analysis results
print(json.dumps(analysis_results, indent=2))

# Save analysis results to a JSON file
with open('analysis_results.json', 'w') as json_file:
    json.dump(analysis_results, json_file, indent=2)
