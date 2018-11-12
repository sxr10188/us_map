import os
from flask import Flask, url_for, render_template, request

app = Flask(__name__)

@app.route('/')
def render_main():
    return render_template('home.html')

capitals = { "CA":"Sacramento",
             "AK":"Juneau",
             "AZ":"Phoenix",
             "NV":"Carson City",
             "WA":"Olympia" }

# This is a very simple "AJAX" style route for getting the capital
# of a state

@app.route('/capital/<state>')
def get_capital(state):
    if state in capitals:
        return capitals[state]
    else:
        return "Not Found"

if __name__=="__main__":
    port_number = int(os.environ.get('PORT', 5000))
    app.run(debug=True, port=port_number)
