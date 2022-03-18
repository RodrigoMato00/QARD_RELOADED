from utils.db import db
import uuid
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.dialects.mysql import LONGTEXT

class Contact(db.Model):

    __tablename__ = 'contacts_table'
    id = db.Column(db.String(60), primary_key=True)
    fullname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(100), nullable=False)
    comp_id = db.Column(db.String(60), ForeignKey('company_table.id'))
    user_position = db.Column(db.String(100), nullable=False)
    web_page = db.Column(db.String(100))
    linkedin = db.Column(db.String(100))
    github = db.Column(db.String(100))
    instagram = db.Column(db.String(100))
    about_you = db.Column(db.String(285))
    facebook = db.Column(db.String(100))
    twitter = db.Column(db.String(100))
    behance = db.Column(db.String(100))
    slack = db.Column(db.String(100))
    button_color = db.Column(db.String(100), nullable=False)
    icon_color = db.Column(db.String(100), nullable=False)

    def __init__(self, fullname, email, phone, comp_id, user_position, web_page, linkedin, github, instagram, about_you, facebook, twitter, behance, slack, button_color, icon_color):
        self.id = str(uuid.uuid4())
        self.fullname = fullname
        self.email = email
        self.phone = phone
        self.comp_id = comp_id
        self.user_position = user_position
        self.web_page = web_page
        self.linkedin = linkedin
        self.github = github
        self.instagram = instagram
        self.about_you = about_you
        self.facebook = facebook
        self.twitter = twitter
        self.behance = behance
        self.slack = slack
        self.button_color = button_color
        self.icon_color = icon_color