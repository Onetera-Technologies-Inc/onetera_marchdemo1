from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = "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"

def response(user_question):
  if user_question:
      docs = my_knowledge_base.similarity_search(user_question)
      print(docs)
  return "hey"
    #   llm = OpenAI(openai_api_key="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")
    #   chain = load_qa_chain(llm, chain_type="stuff")
    #   with get_openai_callback() as cb:
    #     response = chain.run(input_documents=docs, question=user_question)
    #     return(response)

@app.route('/api/hello', methods=['POST'])
def hello_world():
    try:
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
    app.run(debug=True, port=5000)



