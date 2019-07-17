from flask import Flask, redirect

app = Flask(__name__)

@app.route('/login')
def login():
    return '''<html><head><script>require('electron').remote.require('./index.js').loggedIn('Steve')</script></head><body>Hello, world!</body></html>'''

if __name__ == '__main__':
    app.run(debug=True)
