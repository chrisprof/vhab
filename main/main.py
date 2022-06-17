from tkinter import Y
import flask

from flask import Flask, render_template

import matplotlib.pyplot as plt

app = Flask(__name__)

x=[1,2,3,4,5]
y=[1,2,3,4,6]


plt.plot(x,y)
img = plt.savefig('main/static/example.png')

@app.route('/')
def main():
    return render_template('index.html', srcimg='./static/example.png')

if __name__ == '__main__':
    app.run()