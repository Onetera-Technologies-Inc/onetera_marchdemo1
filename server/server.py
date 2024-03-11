# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import openai
# import pandas as pd
# from langchain_experimental.agents.agent_toolkits import create_csv_agent
# from langchain_openai import ChatOpenAI
# import numpy as np

# app = Flask(__name__)
# CORS(app)

# openai.api_key = "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"

# def response(user_question):
#   if user_question:
#       docs = my_knowledge_base.similarity_search(user_question)
#       print(docs)
#   return "hey"
#     #   llm = OpenAI(openai_api_key="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")
#     #   chain = load_qa_chain(llm, chain_type="stuff")
#     #   with get_openai_callback() as cb:
#     #     response = chain.run(input_documents=docs, question=user_question)
#     #     return(response)

# @app.route('/api/hello', methods=['POST'])
# def hello_world():
#     try:

#         data = request.get_json()
#         messages = data.get('messages', [])[-1]['content']
#         answer=""

#         pd.read_csv("titanic.csv")
#         llm=ChatOpenAI(api_key="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")
#         agent=create_csv_agent(llm, "titanic.csv", verbose=True,handle_parsing_errors=True)
#         print(agent.invoke(messages))

#         # try:
#         #     pd.read_csv("titanic.csv")
#         #     print(pd.read_csv("titanic.csv"))
#         #     llm=ChatOpenAI(api_key="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")
#         #     agent=create_csv_agent(llm, "titanic.csv", verbose=True)
#         #     result=""
#         #     try:
#         #         result = agent.invoke(messages)
#         #         print(result)
#         #     except Exception as e:
#         #         print(f"Error invoking agent: {e}")
#         #     if result['output'] == "N/A" or result['output' == "Not applicable"]:
#         #         response = openai.completions.create(
#         #         model="gpt-3.5-turbo-instruct",
#         #         prompt=messages,
#         #         max_tokens=250,  # Increase the max_tokens to get longer responses
#         #         temperature=0.7,  # Adjust temperature for creativity, 0 is more deterministic
#         #         top_p=1.0,
#         #         frequency_penalty=0.0,
#         #         presence_penalty=0.0,
#         #         stop=["\n\n"],  # Stop sequence to signal the end of a response
#         #         )
#         #         answer = response.choices[0].text
#         #         print(answer)
#         #     else:
#         #         answer = result['output']
                
      

#         response_data = {
#         'output': {
#             'content': answer,
#             'role': 'assistant'  
#         }
#        }



        
#         # response = openai.ChatCompletion.create(
#         #     model="gpt-3.5-turbo",
#         #     messages=messages
#         # )

#         # if response.choices:
#         #     theResponse = response.choices[0].message
#         # else:
#         #     theResponse = "No response"



        

#         return jsonify(response_data), 200
        
#     except Exception as e:
#         print(f"Error: {str(e)}")
#         return jsonify({"error": "An error occurred while processing your request."}), 500



# if __name__ == '__main__':
#     app.run(debug=True, port=5000)

from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import pandas as pd
from langchain_experimental.agents.agent_toolkits import create_csv_agent
from openai import OpenAI
import numpy as np
from openai import ChatCompletion

from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationalRetrievalChain
from langchain.document_loaders.csv_loader import CSVLoader
from langchain.vectorstores import FAISS


app = Flask(__name__)
CORS(app)

df = pd.read_csv("titanic.csv")
loader = CSVLoader(file_path="titanic.csv", encoding="utf-8", csv_args={'delimiter': ','})
data1 = loader.load()

embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_documents(data1, embeddings)
llm_model = ChatOpenAI(temperature=0.0,model_name='gpt-3.5-turbo')
chain = ConversationalRetrievalChain.from_llm(
llm = llm_model,
            retriever=vectorstore.as_retriever())



@app.route('/api/hello', methods=['POST'])
def hello_world():
    try:

        data = request.get_json()
        messages = data.get('messages', [])[-1]['content']

        result = chain({"question": messages, "chat_history": []})
        answer = result["answer"]
        
        structured_prompt = f"""
Given the detailed information below, convert it into a structured array of dictionary JSON format for displaying in a table on a website:
- If the question is specifically about housing unit details (like rent, unit type, etc.), include the following details in JSON: propertyName,unitType,approximateMonthlyRent,householdSize, householdSize, maximumAnnualIncome,applicationPeriodStart,applicationPeriodEnd,city,submissionDate,status,waitlistPosition,waitlistSlots,availableUnits,lotteryDate
- If the question is specifically about the process of application, focus on providing only the steps necessary for application. Do not include any information regarding the details of the units. 
- If any specific detail is not present or not applicable, use "Not Applicable" as a value for that detail.
- Ensure to format the data as key-value pairs for clear representation.

Question: "{answer}"
"""

        client = OpenAI()
        response = openai.completions.create(
                model="gpt-3.5-turbo-instruct",
                prompt=structured_prompt,
                max_tokens=1024,                
                )
        
        print(response.choices[0].text)
        

        response_data = {
        'output': {
            'content': answer,
            'role': 'assistant',
            'output_json': response.choices[0].text.strip()
        },
       }
        return jsonify(response_data), 200
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": "An error occurred while processing your request."}), 500



if __name__ == '__main__':
    app.run(debug=True, port=5000)


