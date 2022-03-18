from utils.db import db
import uuid
from flask_login import UserMixin
from sqlalchemy.orm import relationship
from sqlalchemy import Column, String, Integer, ForeignKey
from models.contact import Contact

class Company(db.Model, UserMixin):

    __tablename__ = 'company_table'
    id = db.Column(db.String(60), primary_key=True)
    company_name = db.Column(db.String(60), unique=True, nullable=False)
    company_password = db.Column(db.String(60), nullable=False)
    contacts = relationship('Contact', backref='company')
    company_social_razon = db.Column(db.String(60), nullable=False)
    company_rut = db.Column(db.String(60), nullable=False)
    company_email = db.Column(db.String(60), nullable=False)
    company_adress = db.Column(db.String(60), nullable=False)
    company_phone = db.Column(db.String(60), nullable=False)
    company_city = db.Column(db.String(60), nullable=False)
    company_country = db.Column(db.String(60), nullable=False)

    def __init__(self, company_name, company_password, company_social_razon, company_rut, company_email, company_adress, company_phone, company_city, company_country):
        self.id = str(uuid.uuid4())
        self.company_name = company_name
        self.company_password = company_password
        self.company_social_razon = company_social_razon
        self.company_rut = company_rut
        self.company_email = company_email
        self.company_adress = company_adress
        self.company_phone = company_phone
        self.company_city = company_city
        self.company_country = company_country