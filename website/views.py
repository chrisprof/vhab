from flask import Blueprint, render_template

views = Blueprint('views', __name__)


@views.route('/')
@views.route('/home')
def home():
    return render_template("home.html")


@views.route('/profile')
def profile():
    return render_template("profile.html")


@views.route('/resources')
def resources():
    return render_template("resources.html")


@views.route('/drug')
def drug():
    return render_template("drug.html")
