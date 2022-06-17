import flask

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def app():
    return render_template('index.html', srcimg='./static/example.png')

if __name__ == '__main__':
    app.run()