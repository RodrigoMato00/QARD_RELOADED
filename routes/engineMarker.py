from ensurepip import version
from enum import Flag
from re import A, M, S
import os
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import shutil
import time
from webdriver_manager.chrome import ChromeDriverManager

"""module that handles ARUCO creation and its use to create .patt and .png marker for AR"""

def MarkerGen():
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.implicitly_wait(5)
    driver.get("http://54.165.7.222/arucogen/index.html")
    arucoId = driver.find_element(By.ID, 'frm-id')
    i = 0
    while os.path.exists("C:\\xampp\\htdocs\\LOGIN_modify-final\\files_marker_svg\\4x4_1000-%s.svg" %i):
        i += 1
    arucoId.clear()
    arucoId.send_keys(i)
    downloadAr = driver.find_element(By.CLASS_NAME, 'save-button')
    downloadAr.click()
    time.sleep(5)
    shutil.move("C:\\Users\\3293\\Downloads\\4x4_1000-%s.svg" %i, "C:\\xampp\\htdocs\\LOGIN_modify-final\\files_marker_svg\\4x4_1000-%s.svg" %i)
    driver.get("http://54.165.7.222/marker-training/examples/generator.html")
    file = driver.find_element(By.ID, 'fileinput')
    file.send_keys("C:\\xampp\\htdocs\\LOGIN_modify-final\\files_marker_svg\\4x4_1000-%s.svg" %i)
    time.sleep(7)
    driver.find_element(By.ID, 'buttonDownloadEncoded').click()
    actions = ActionChains(driver)
    elem = driver.find_element(By.ID, 'buttonUpload')
    actions.move_to_element(elem).perform()
    WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="buttonDownloadFullImage"]/span'))).click()
    time.sleep(2)
    shutil.move("C:\\Users\\3293\\Downloads\\pattern-4x4_1000-%s.patt" %i, "C:\\xampp\\htdocs\\LOGIN_modify-final\\files_marker_patt\\pattern-4x4_1000-%s.patt" %(i + 1))
    shutil.move("C:\\Users\\3293\\Downloads\\pattern-4x4_1000-%s.png" %i, "C:\\xampp\\htdocs\\LOGIN_modify-final\\files_marker_png\\pattern-4x4_1000-%s.png" %(i + 1))
    driver.quit()



