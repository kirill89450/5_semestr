import sqlite3
from PyQt5 import QtWidgets
import screen
from widgets import Main,Registration

db=sqlite3.connect('database.db')
cursor=db.cursor()

class Login(QtWidgets.QMainWindow,screen.login.Ui_MainWindow):
    def __init__(self):
        super(Login, self).__init__()
        self.setupUi(self)
        self.btn_reg.pressed.connect(self.reg)
        self.btn_login.pressed.connect(self.login)
        self.main=Main.Main()
        
    
        
    def login(self):
        user_email=self.email.text()+self.combo_mail.currentText()
        user_password=self.passwd.text()
        
        if len(user_email) and len(user_password) == 0:
            return
        cursor.execute(f'SELECT email,password FROM users WHERE email="{user_email}"')
        check_info=cursor.fetchall()
        if check_info == []:
            self.label_info.setText('Не правильная почта')
        else:
            check_email,check_pass=check_info[0][0],check_info[0][1]
            if check_pass == user_password and check_email == user_email:
                self.auth(user_email)
            else:
                self.label_info.setText('Не правильная почта или пароль!')
        
    def auth(self,user_email):
        self.main.show_info(user_email)
        self.main.show()
        self.close()
    
    def reg(self):
        self.reg=Registration.Registration()
        self.reg.show()
        self.hide()