from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import UserMixin, LoginManager, login_user, login_required, logout_user, current_user
from models.login import Company
from utils.db import db
from flask_bcrypt import Bcrypt
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError

logins = Blueprint('logins', __name__)
bcrypt = Bcrypt()

class RegisterForm(FlaskForm):

    company_social_razon = StringField('Business Name', validators=[InputRequired(), Length(min=2, max=50)], render_kw={"placeholder": "Business Name"})
    company_rut = StringField('Rut', validators=[InputRequired(), Length(min=2, max=50)], render_kw={"placeholder": "RUT"})
    company_email = StringField('Email', validators=[InputRequired(), Length(min=2, max=50)], render_kw={"placeholder": "Email"})
    company_adress = StringField('Address', validators=[InputRequired(), Length(min=2, max=50)], render_kw={"placeholder": "Address"})
    company_phone = StringField('Phone', validators=[InputRequired(), Length(min=2, max=50)], render_kw={"placeholder": "Phone"})
    company_city = StringField('City', validators=[InputRequired(), Length(min=2, max=50)], render_kw={"placeholder": "City"})
    company_country = StringField('Country', validators=[InputRequired(), Length(min=2, max=50)], render_kw={"placeholder": "Country"})
    company_name = StringField('User Name', validators=[InputRequired(), Length(min=4, max=15)], render_kw={"placeholder": "User Name"})
    company_password = StringField('Password', validators=[InputRequired(), Length(min=4, max=15)], render_kw={"placeholder": "Password"})
    
    submit = SubmitField('Register')

    def validate_company_name(self, company_name):
        existing_company = Company.query.filter_by(company_name=company_name.data).first()
        if existing_company:
            raise ValidationError('That company name is taken. Please choose a different one.')

class LoginForm(FlaskForm):
    company_name = StringField('User Name', validators=[InputRequired(), Length(min=4, max=15)], render_kw={"placeholder": "Company Name"})
    company_password = StringField('Password', validators=[InputRequired(), Length(min=4, max=15)], render_kw={"placeholder": "Password"})
    submit = SubmitField('Login')

@logins.route('/')
def index():
    return render_template('home.html')

@logins.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        company = Company.query.filter_by(company_name=form.company_name.data).first()
        if company:
            if bcrypt.check_password_hash(company.company_password, form.company_password.data):
                login_user(company)
                return redirect(url_for('contacts.index'))
    return render_template('login.html', form=form)

@logins.route('/dashboard', methods=['GET', 'POST'])
@login_required # This is to make sure that only logged in users can access this page
def dashboard():
    return render_template('dashboard.html')

@logins.route('/logout', methods=['GET', 'POST'])
@login_required
def logout():
    logout_user()
    return redirect(url_for('logins.login'))

@logins.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm()

    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.company_password.data)
        new_company = Company(form.company_name.data, hashed_password, form.company_social_razon.data, form.company_rut.data, form.company_email.data, form.company_adress.data, form.company_phone.data, form.company_city.data, form.company_country.data)
        db.session.add(new_company)
        db.session.commit()
        return redirect(url_for('logins.login'))

    return render_template('register.html', form=form)