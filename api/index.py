from flask import Flask, request, jsonify
import openai
from flask_cors import CORS
from dotenv import load_dotenv
import os


load_dotenv() 

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world1():
    return jsonify({"message": "Hello, World!"})

@app.route('/api/hello', methods=['POST'])
def hello_world():
    try:

        openai.api_key = os.environ.get('OPENAI_API_KEY')
        # openai.api_key =  os.getenv('OPENAI_API_KEY')
    
        data = request.get_json()
        messages = data.get('messages', [])
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages
        )

        if response.choices:
            theResponse = response.choices[0].message
        else:
            theResponse = "No response"

        response_data = {"output": theResponse}

        return jsonify(response_data), 200
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": "An error occurred while processing your request."}), 500

if __name__ == '__main__':
    app.run(debug=True)
