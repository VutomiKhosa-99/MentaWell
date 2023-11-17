from flask import Flask, jsonify, request
import pandas as pd
import json

app = Flask(__name__)

# Load Excel data into a DataFrame
df = pd.read_csv('mock_data.csv')

# Function to save DataFrame to CSV
def save_to_csv():
    df.to_csv('mock_data.csv', index=False)

# Function to assess mental health based on depression score
def assess_mental_health(score):
    if score < 30:
        return 'Low'
    elif 30 <= score < 70:
        return 'Moderate'
    else:
        return 'High'

# Function to generate personalized recommendations
def generate_recommendations(mental_health_level):
    if mental_health_level == 'Low':
        return 'Continue maintaining a healthy lifestyle and consider social activities.'
    elif mental_health_level == 'Moderate':
        return 'Seek support from friends, family, or a mental health professional.'
    else:
        return 'Urgently seek support from a mental health professional. You are not alone.'

# API endpoint to get all assessments
@app.route('/api/assessments', methods=['GET'])
def get_assessments():
    assessments = df[['age', 'gender', 'depression_score', 'mental_health', 'recommendations', 'progress']].to_dict(orient='records')
    return jsonify(assessments)

# API endpoint to get a specific assessment by ID
@app.route('/api/assessments/<int:assessment_id>', methods=['GET'])
def get_assessment(assessment_id):
    assessment = df.iloc[assessment_id].to_dict()
    return jsonify(assessment)

# API endpoint to create a new assessment
@app.route('/api/assessments', methods=['POST'])
def create_assessment():
    data = request.get_json()

    # Assuming the data includes necessary fields such as 'age', 'gender', 'depression_score', etc.
    new_assessment = {
        'age': data['age'],
        'gender': data['gender'],
        'depression_score': data['depression_score'],
        'assessment_date': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
    }

    df.loc[len(df)] = new_assessment
    save_to_csv()

    return jsonify(new_assessment), 201

# API endpoint to update an existing assessment
@app.route('/api/assessments/<int:assessment_id>', methods=['PUT'])
def update_assessment(assessment_id):
    data = request.get_json()

    # Assuming the data includes necessary fields for update
    df.loc[assessment_id, 'age'] = data['age']
    df.loc[assessment_id, 'gender'] = data['gender']
    df.loc[assessment_id, 'depression_score'] = data['depression_score']

    save_to_csv()

    updated_assessment = df.iloc[assessment_id].to_dict()
    return jsonify(updated_assessment)

# API endpoint to delete an assessment
@app.route('/api/assessments/<int:assessment_id>', methods=['DELETE'])
def delete_assessment(assessment_id):
    df.drop(assessment_id, inplace=True)
    save_to_csv()

    return jsonify({'message': 'Assessment deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
