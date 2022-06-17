from flask import Blueprint, render_template

link = Blueprint('link', __name__)

@link.route('/page1')
def page1():
    return "page1"

@link.route('/page2')
def page2():
    return "page2"

@link.route('/page3')
def page3():
    return "page3"