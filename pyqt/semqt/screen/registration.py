# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file '.\ui\registration.ui'
#
# Created by: PyQt5 UI code generator 5.15.7
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(359, 300)
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.verticalLayout = QtWidgets.QVBoxLayout(self.centralwidget)
        self.verticalLayout.setObjectName("verticalLayout")
        self.splitter_3 = QtWidgets.QSplitter(self.centralwidget)
        self.splitter_3.setOrientation(QtCore.Qt.Horizontal)
        self.splitter_3.setObjectName("splitter_3")
        self.label_4 = QtWidgets.QLabel(self.splitter_3)
        self.label_4.setObjectName("label_4")
        self.f_name = QtWidgets.QLineEdit(self.splitter_3)
        self.f_name.setMaximumSize(QtCore.QSize(285, 16777215))
        self.f_name.setObjectName("f_name")
        self.verticalLayout.addWidget(self.splitter_3)
        self.splitter_4 = QtWidgets.QSplitter(self.centralwidget)
        self.splitter_4.setOrientation(QtCore.Qt.Horizontal)
        self.splitter_4.setObjectName("splitter_4")
        self.label_5 = QtWidgets.QLabel(self.splitter_4)
        self.label_5.setMaximumSize(QtCore.QSize(50, 16777215))
        self.label_5.setObjectName("label_5")
        self.l_name = QtWidgets.QLineEdit(self.splitter_4)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Fixed)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.l_name.sizePolicy().hasHeightForWidth())
        self.l_name.setSizePolicy(sizePolicy)
        self.l_name.setMaximumSize(QtCore.QSize(285, 16777215))
        self.l_name.setObjectName("l_name")
        self.verticalLayout.addWidget(self.splitter_4)
        self.label_2 = QtWidgets.QLabel(self.centralwidget)
        self.label_2.setObjectName("label_2")
        self.verticalLayout.addWidget(self.label_2)
        self.splitter_2 = QtWidgets.QSplitter(self.centralwidget)
        self.splitter_2.setOrientation(QtCore.Qt.Horizontal)
        self.splitter_2.setObjectName("splitter_2")
        self.email = QtWidgets.QLineEdit(self.splitter_2)
        self.email.setInputMask("")
        self.email.setText("")
        self.email.setMaxLength(1000)
        self.email.setObjectName("email")
        self.combo_mail = QtWidgets.QComboBox(self.splitter_2)
        self.combo_mail.setObjectName("combo_mail")
        self.combo_mail.addItem("")
        self.combo_mail.addItem("")
        self.combo_mail.addItem("")
        self.verticalLayout.addWidget(self.splitter_2)
        self.label = QtWidgets.QLabel(self.centralwidget)
        self.label.setObjectName("label")
        self.verticalLayout.addWidget(self.label)
        self.passwd = QtWidgets.QLineEdit(self.centralwidget)
        self.passwd.setEchoMode(QtWidgets.QLineEdit.Password)
        self.passwd.setObjectName("passwd")
        self.verticalLayout.addWidget(self.passwd)
        self.label_3 = QtWidgets.QLabel(self.centralwidget)
        self.label_3.setObjectName("label_3")
        self.verticalLayout.addWidget(self.label_3)
        self.combo_inst = QtWidgets.QComboBox(self.centralwidget)
        self.combo_inst.setObjectName("combo_inst")
        self.verticalLayout.addWidget(self.combo_inst)
        self.combo_group = QtWidgets.QComboBox(self.centralwidget)
        self.combo_group.setObjectName("combo_group")
        self.verticalLayout.addWidget(self.combo_group)
        self.splitter = QtWidgets.QSplitter(self.centralwidget)
        self.splitter.setOrientation(QtCore.Qt.Horizontal)
        self.splitter.setObjectName("splitter")
        self.btn_reg = QtWidgets.QPushButton(self.splitter)
        self.btn_reg.setObjectName("btn_reg")
        self.verticalLayout.addWidget(self.splitter)
        self.label_info = QtWidgets.QLabel(self.centralwidget)
        self.label_info.setText("")
        self.label_info.setObjectName("label_info")
        self.verticalLayout.addWidget(self.label_info)
        MainWindow.setCentralWidget(self.centralwidget)

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "Регистрация"))
        self.label_4.setText(_translate("MainWindow", "Имя"))
        self.label_5.setText(_translate("MainWindow", "Фамилия"))
        self.label_2.setText(_translate("MainWindow", "Почта"))
        self.combo_mail.setItemText(0, _translate("MainWindow", "@gmail.com"))
        self.combo_mail.setItemText(1, _translate("MainWindow", "@mail.ru"))
        self.combo_mail.setItemText(2, _translate("MainWindow", "@yandex.ru"))
        self.label.setText(_translate("MainWindow", "Пароль"))
        self.label_3.setText(_translate("MainWindow", "Институт/группа"))
        self.btn_reg.setText(_translate("MainWindow", "Регистрация"))


if __name__ == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    MainWindow = QtWidgets.QMainWindow()
    ui = Ui_MainWindow()
    ui.setupUi(MainWindow)
    MainWindow.show()
    sys.exit(app.exec_())