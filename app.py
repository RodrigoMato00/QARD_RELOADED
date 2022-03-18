from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, LoginManager, login_user, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt
from models.login import Company
from utils.db import db
from routes.contacts import contacts
from routes.logins import logins
from config import DATABASE_CONNECTION_URI

app = Flask(__name__) # __name__ is the name of the current module

app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_CONNECTION_URI
app.config['SECRET_KEY'] = 'nq6fZsgsoO2Ny2DnXXThKw'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

SQLAlchemy(app) # This is to connect to the database
Bcrypt(app) # This is to encrypt the password

app.register_blueprint(contacts) # This is to register the blueprint for the contacts module
app.register_blueprint(logins) # This is to register the blueprint for the logins module




login_manager = LoginManager() # This is to manage the login
login_manager.init_app(app) # This is to initialize the login manager
login_manager.login_view = 'login' # This is to set the login view

@login_manager.user_loader # This is to load the user
def load_user(company_id):
    return Company.query.get(str(company_id)) 