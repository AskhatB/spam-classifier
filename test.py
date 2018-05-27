import pickle
from flask import Flask, jsonify, request
#from train import *
from functions import get_features

app = Flask(__name__)

@app.route("/predict", methods=['POST'])
def predict():
    if request.method == 'POST':
        try:
            data = request.get_json()
            f = open('my_classifier.pickle', 'rb')
            classifier = pickle.load(f)
            f.close()

        except ValueError:
            return jsonify("Please enter a mail.")

        return jsonify(classifier.classify(get_features(data["mail"])))

if __name__ == '__main__':
    app.run(debug=True)
    