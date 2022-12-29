import sqlite3
from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QTableWidgetItem
import screen
from widgets import Registration
db=sqlite3.connect('database.db')
cursor=db.cursor()



class Main(QtWidgets.QMainWindow,screen.main.Ui_MainWindow):
    def __init__(self):
        super(Main, self).__init__()
        self.setupUi(self)
        

       
        
    def show_info(self,user_email):
        print(user_email)
        cursor.execute(f'SELECT f_name,l_name,grup,id FROM users WHERE email="{user_email}"')
        self.info=cursor.fetchall()
        self.label_name.setText(f"{self.info[0][0]} {self.info[0][1]}")
        self.label_grup.setText(f"{self.info[0][2]}")
        self.show_table()
        
    def show_table(self):
        tabs=[self.curs1,self.curs2,self.curs3,self.curs4]
        
        for i in range(len(tabs)):
            cursor.execute(f'SELECT subject,type,score,rate,curse FROM tabel WHERE id_user={self.info[0][3]} and curse = {i+1}')
            info = cursor.fetchall()
            tabs[i].children()[0].setEditTriggers(QtWidgets.QAbstractItemView.NoEditTriggers)
            tabs[i].children()[0].setRowCount(len(info))
            for j in range(len(info)):
                for k in range(len(info[j])):
                    tabs[i].children()[0].setItem(j,k,QTableWidgetItem(f"{info[j][k]}"))
                    
  
            
            
            
        
            
            
            
        

    
    
    
        
        