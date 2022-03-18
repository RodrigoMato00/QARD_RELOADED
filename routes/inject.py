import json

def inject():

    with open('contacts.json', 'r') as f:
        texto = json.load(f)

    text = 'var dict = ' + str(texto) + ';\n'

    with open('C:\\xampp\\htdocs\\LOGIN_modify-final\\tarjeta_click\\js\\multiMarkers_esta_vivo.js', 'r') as f:
        list_of_lines = f.readlines()

    list_of_lines[0] = text

    with open('C:\\xampp\\htdocs\\LOGIN_modify-final\\tarjeta_click\\js\\multiMarkers_esta_vivo.js', 'w') as f:
        f.writelines(list_of_lines)