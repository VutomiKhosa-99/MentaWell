from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

# Load Excel data into a DataFrame
df = pd.read_excel('../data-analysis/data.xlsx')

# API endpoint to get the analyzed data
@app.route('/api/data', methods=['GET'])
def get_data():
   
    data = df.to_dict(orient='records')
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
