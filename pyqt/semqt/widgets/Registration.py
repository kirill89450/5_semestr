import sqlite3
from PyQt5 import QtWidgets
import screen
from widgets import Main,Login

db=sqlite3.connect('database.db')
cursor=db.cursor()


class Registration(QtWidgets.QMainWindow,screen.registration.Ui_MainWindow):
    def __init__(self):
        super(Registration, self).__init__()
        self.setupUi(self)
        self.combos()
        self.check_combo("Институт фундаментальных наук")
        self.combo_inst.activated[str].connect(self.check_combo)
        self.btn_reg.pressed.connect(self.reg)
        self.main=Main.Main()
        
        
       
        
    def combos(self):
        self.inst={}
        self.grup=[]
        
        for i in cursor.execute('SELECT * FROM institute'):
            self.inst[i[0]]=i[1]
        for i in range(len(self.inst)):
            self.combo_inst.addItem(self.inst[i+1])
        
    def check_combo(self,text):
        self.grup=[]
        self.combo_group.clear()
        for k,v in self.inst.items():
            if v == text:
                id_inst=k
        
        for i in cursor.execute(f'SELECT name FROM grup WHERE id_institute={id_inst}'):
            self.grup.append(i[0])
        
        for i in range(len(self.inst)):
            
            self.combo_group.addItem(self.grup[i])
       
    def auth(self,user_email):
        self.main.show_info(user_email)
        self.main.show()
        self.close() 
            
        
            
    def reg(self):
        user_f_name=self.f_name.text()
        user_l_name=self.l_name.text()
        user_email=self.email.text()+self.combo_mail.currentText()
        user_password=self.passwd.text()
        user_inst=self.combo_inst.currentText()
        user_group=self.combo_group.currentText()
        

        if len(user_email) and len(user_password) == 0:
            return
        cursor.execute(f'SELECT email FROM users WHERE email = "{user_email}"')
        if cursor.fetchone() is None:
            cursor.execute(f'INSERT INTO users (email,password,institut,grup,f_name,l_name) VALUES ("{user_email}","{user_password}","{user_inst}","{ user_group}","{user_f_name}","{user_l_name}")')
            db.commit()
            self.auth(user_email)
            
            
        else:
            self.label_info.setText("Такой аккаунт уже существует")
