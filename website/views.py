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

@views.route('/start')
def start():
    return render_template("start.html")

@views.route('/stats')
def stats():
    return render_template("stats.html")

@views.route('/forums')
def forums():
    return render_template("forums.html")

@views.route('/family')
def family():
    return render_template('family.html')

@views.route('/tos')
def tos():
    return render_template('tos.html')