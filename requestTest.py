import requests

mail_text = {"mail": "complete turnkey system software - videos - turorials clk here for information"}

response = requests.post("http://127.0.0.1:5000/predict", json = mail_text)
print(response.json())
