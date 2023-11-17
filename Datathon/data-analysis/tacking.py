import pandas as pd
import json
from datetime import datetime

# Load Excel data into a DataFrame
df = pd.read_csv('mock_data.csv')

# Function to assess mental health based on depression score
def assess_mental_health(score):
    if score < 30:
        return 'Low'
    elif 30 <= score < 70:
        return 'Moderate'
    else:
        return 'High'

# Assess mental health for each individual
df['mental_health'] = df['depression_score'].apply(assess_mental_health)

# Function to generate personalized recommendations
def generate_recommendations(mental_health_level):
    if mental_health_level == 'Low':
        return 'Continue maintaining a healthy lifestyle and consider social activities.'
    elif mental_health_level == 'Moderate':
        return 'Seek support from friends, family, or a mental health professional.'
    else:
        return 'Urgently seek support from a mental health professional. You are not alone.'

# Generate recommendations for each individual
df['recommendations'] = df['mental_health'].apply(generate_recommendations)

# Function to track progress over time
def track_progress(assessment_date, depression_score):
    return {'date': assessment_date, 'score': depression_score}

# Track progress for each individual
df['progress'] = df.apply(lambda row: track_progress(row['assessment_date'], row['depression_score']), axis=1)

# Save analysis results to a JSON file
analysis_results = {
    'total_count': len(df),
    'male_count': len(df[df['gender'].str.lower() == 'male']),
    'female_count': len(df[df['gender'].str.lower() == 'female']),
    'age_counts': df['age'].value_counts().to_dict(),
    'prev_depressed_count': len(df[df['treatment_received'] == 'TRUE']),
    'currently_depressed_count': len(df[df['depression_score'] >= 50]),
    'never_depressed_count': len(df[df['treatment_received'] == 'FALSE']),
    'assessments': df[['age', 'gender', 'depression_score', 'mental_health', 'recommendations', 'progress']].to_dict(orient='records'),
}

with open('analysis_results.json', 'w') as json_file:
    json.dump(analysis_results, json_file, indent=2)

# Print analysis results
print(json.dumps(analysis_results, indent=2))
