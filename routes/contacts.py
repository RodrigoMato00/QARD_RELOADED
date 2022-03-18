from routes.inject import inject
from flask import Blueprint, jsonify, render_template, request, redirect, url_for, flash
from flask_login import UserMixin, LoginManager, login_user, login_required, logout_user, current_user
from sqlalchemy import null
from models.contact import Contact
from utils.db import db
import json
import PIL.Image as Image
import io
import base64
from routes.engineMarker import MarkerGen

contacts = Blueprint('contacts', __name__)

j_list = []

@contacts.route('/crud', methods=['GET', 'POST'])
@login_required
def index():
    current_id = current_user.id
    #contacts = Contact.query.all() # SELECT * FROM contacts
    contacts_comp_id = Contact.query.filter_by(comp_id=current_id).all() # SELECT * FROM contacts WHERE company_id = current_id
    return render_template('index.html', contacts=contacts_comp_id, c_id=current_id)

@contacts.route('/new', methods=['POST'])
@login_required
def add_contact():
    dicto = {}
    fullname = request.form['fullname']
    email = request.form['email']
    phone = request.form['phone']

    new_contact = Contact(fullname, email, phone, current_user.id, '', '', '', '', '', '', '', '', '', '', '', '')

    # get id of the new contact
    dicto[new_contact.id] = {'fullname': fullname, 'email': email, 'phone': phone}

    try:
        with open('contacts.json', 'r') as f:
            data = json.load(f)
    except:
        data = []

    # length of the json file
    length = len(data) + 1

    dicto[new_contact.id]['marker'] = length

    data.append(dicto)

    with open('contacts.json', 'w') as f:
        json.dump(data, f)


    db.session.add(new_contact)
    db.session.commit()

    flash('Contact added successfully!')
    #flash(data)

    MarkerGen()
    inject()

    return redirect(url_for('contacts.index'))

@contacts.route('/update/<id>', methods=['POST', 'GET'])
@login_required
def update_contact(id):
    contact = Contact.query.get(id)
    if request.method == 'POST':
        contact.fullname = request.form['fullname']
        contact.email = request.form['email']
        contact.phone = request.form['phone']
        contact.user_position = request.form['user_position']
        contact.web_page = request.form['web_page']
        contact.linkedin = request.form['linkedin']
        try:
            contact.github = request.form['github']
        except:
            contact.github = ''
        try:
            contact.instagram = request.form['instagram']
        except:
            contact.instagram = ''
        contact.about_you = request.form['about_you']
        try:
            contact.facebook = request.form['facebook']
        except:
            contact.facebook = ''
        try:
            contact.twitter = request.form['twitter']
        except:
            contact.twitter = ''
        try:
            contact.behance = request.form['behance']
        except:
            contact.behance = ''
        try:
            contact.slack = request.form['slack']
        except:
            contact.slack = ''
        try:
            contact.button_color = request.form['button_color']
        except:
            contact.button_color = ''
        try:
            contact.icon_color = request.form['icon_color']
        except:
            contact.icon_color = ''

        with open('contacts.json', 'r') as f:
            data = json.load(f)

        for elem in data:
            if id in elem:
                elem[id] = {'fullname': contact.fullname, 'email': contact.email, 'phone': contact.phone, 'user_position': contact.user_position, 'web_page': contact.web_page, 'linkedin': contact.linkedin, 'github': contact.github, 'instagram': contact.instagram, 'about_you': contact.about_you, 'facebook': contact.facebook, 'twitter': contact.twitter, 'behance': contact.behance, 'slack': contact.slack, 'marker': elem[id]['marker'], 'button_color': contact.button_color, 'icon_color': contact.icon_color}

        with open('contacts.json', 'w') as f:
            json.dump(data, f)

        db.session.commit()

        flash('Contact updated successfully!')
        #flash(data)

        inject()

        return redirect(url_for('contacts.index'))

    return render_template('update.html', contact=contact)

@contacts.route('/test', methods=['POST'])
def test():
    output = request.get_json() # get the json data
    result = json.loads(output) # convert to dict
    res = result.get('img64') # get the image
    url_actual = result.get('url_actual').split('/')[2] # get the url
    byte_array = res.split(',')[1].encode() # convert to byte array
    b = base64.b64decode(byte_array) # decode the base64 string
    img = Image.open(io.BytesIO(b)) # convert to image
    img.save(f'user_photos/photo-{url_actual}.png') # save image
    return result

@contacts.route('/delete/<id>')
@login_required
def delete_contact(id):
    contact = Contact.query.get(id) # SELECT * FROM contacts WHERE id = id
    db.session.delete(contact)
    db.session.commit()

    flash('Contact deleted successfully!')

    return redirect(url_for('contacts.index'))

@contacts.route('/about')
def about():
    return render_template('about.html')
