# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file '.\ui\main.ui'
#
# Created by: PyQt5 UI code generator 5.15.7
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(720, 480)
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.tab_curs = QtWidgets.QTabWidget(self.centralwidget)
        self.tab_curs.setGeometry(QtCore.QRect(10, 60, 701, 411))
        self.tab_curs.setDocumentMode(True)
        self.tab_curs.setTabsClosable(False)
        self.tab_curs.setMovable(False)
        self.tab_curs.setObjectName("tab_curs")
        self.curs1 = QtWidgets.QWidget()
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Preferred, QtWidgets.QSizePolicy.Preferred)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.curs1.sizePolicy().hasHeightForWidth())
        self.curs1.setSizePolicy(sizePolicy)
        self.curs1.setObjectName("curs1")
        self.table_tabel1 = QtWidgets.QTableWidget(self.curs1)
        self.table_tabel1.setGeometry(QtCore.QRect(0, 0, 701, 391))
        self.table_tabel1.setTabletTracking(False)
        self.table_tabel1.setObjectName("table_tabel1")
        self.table_tabel1.setColumnCount(4)
        self.table_tabel1.setRowCount(0)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel1.setHorizontalHeaderItem(0, item)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel1.setHorizontalHeaderItem(1, item)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel1.setHorizontalHeaderItem(2, item)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel1.setHorizontalHeaderItem(3, item)
        self.table_tabel1.horizontalHeader().setVisible(True)
        self.table_tabel1.horizontalHeader().setCascadingSectionResizes(False)
        self.table_tabel1.horizontalHeader().setDefaultSectionSize(174)
        self.table_tabel1.horizontalHeader().setHighlightSections(False)
        self.table_tabel1.horizontalHeader().setMinimumSectionSize(100)
        self.table_tabel1.horizontalHeader().setSortIndicatorShown(False)
        self.table_tabel1.horizontalHeader().setStretchLastSection(False)
        self.table_tabel1.verticalHeader().setVisible(True)
        self.table_tabel1.verticalHeader().setCascadingSectionResizes(False)
        self.table_tabel1.verticalHeader().setHighlightSections(True)
        self.tab_curs.addTab(self.curs1, "")
        self.curs2 = QtWidgets.QWidget()
        self.curs2.setObjectName("curs2")
        self.table_tabel2 = QtWidgets.QTableWidget(self.curs2)
        self.table_tabel2.setGeometry(QtCore.QRect(0, 0, 701, 391))
        self.table_tabel2.setTabletTracking(False)
        self.table_tabel2.setObjectName("table_tabel2")
        self.table_tabel2.setColumnCount(4)
        self.table_tabel2.setRowCount(0)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel2.setHorizontalHeaderItem(0, item)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel2.setHorizontalHeaderItem(1, item)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel2.setHorizontalHeaderItem(2, item)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel2.setHorizontalHeaderItem(3, item)
        self.table_tabel2.horizontalHeader().setVisible(False)
        self.table_tabel2.horizontalHeader().setCascadingSectionResizes(False)
        self.table_tabel2.horizontalHeader().setDefaultSectionSize(174)
        self.table_tabel2.horizontalHeader().setHighlightSections(False)
        self.table_tabel2.horizontalHeader().setMinimumSectionSize(100)
        self.table_tabel2.horizontalHeader().setSortIndicatorShown(False)
        self.table_tabel2.horizontalHeader().setStretchLastSection(False)
        self.table_tabel2.verticalHeader().setVisible(False)
        self.table_tabel2.verticalHeader().setCascadingSectionResizes(False)
        self.table_tabel2.verticalHeader().setHighlightSections(True)
        self.tab_curs.addTab(self.curs2, "")
        self.curs3 = QtWidgets.QWidget()
        self.curs3.setObjectName("curs3")
        self.table_tabel3 = QtWidgets.QTableWidget(self.curs3)
        self.table_tabel3.setGeometry(QtCore.QRect(0, 0, 701, 391))
        self.table_tabel3.setTabletTracking(False)
        self.table_tabel3.setObjectName("table_tabel3")
        self.table_tabel3.setColumnCount(4)
        self.table_tabel3.setRowCount(0)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel3.setHorizontalHeaderItem(0, item)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel3.setHorizontalHeaderItem(1, item)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel3.setHorizontalHeaderItem(2, item)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel3.setHorizontalHeaderItem(3, item)
        self.table_tabel3.horizontalHeader().setVisible(False)
        self.table_tabel3.horizontalHeader().setCascadingSectionResizes(False)
        self.table_tabel3.horizontalHeader().setDefaultSectionSize(174)
        self.table_tabel3.horizontalHeader().setHighlightSections(False)
        self.table_tabel3.horizontalHeader().setMinimumSectionSize(100)
        self.table_tabel3.horizontalHeader().setSortIndicatorShown(False)
        self.table_tabel3.horizontalHeader().setStretchLastSection(False)
        self.table_tabel3.verticalHeader().setVisible(False)
        self.table_tabel3.verticalHeader().setCascadingSectionResizes(False)
        self.table_tabel3.verticalHeader().setHighlightSections(True)
        self.tab_curs.addTab(self.curs3, "")
        self.curs4 = QtWidgets.QWidget()
        self.curs4.setObjectName("curs4")
        self.table_tabel4 = QtWidgets.QTableWidget(self.curs4)
        self.table_tabel4.setGeometry(QtCore.QRect(0, 0, 701, 391))
        self.table_tabel4.setTabletTracking(False)
        self.table_tabel4.setObjectName("table_tabel4")
        self.table_tabel4.setColumnCount(4)
        self.table_tabel4.setRowCount(0)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel4.setHorizontalHeaderItem(0, item)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel4.setHorizontalHeaderItem(1, item)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel4.setHorizontalHeaderItem(2, item)
        item = QtWidgets.QTableWidgetItem()
        self.table_tabel4.setHorizontalHeaderItem(3, item)
        self.table_tabel4.horizontalHeader().setVisible(False)
        self.table_tabel4.horizontalHeader().setCascadingSectionResizes(True)
        self.table_tabel4.horizontalHeader().setDefaultSectionSize(174)
        self.table_tabel4.horizontalHeader().setHighlightSections(False)
        self.table_tabel4.horizontalHeader().setMinimumSectionSize(100)
        self.table_tabel4.horizontalHeader().setSortIndicatorShown(False)
        self.table_tabel4.horizontalHeader().setStretchLastSection(False)
        self.table_tabel4.verticalHeader().setVisible(False)
        self.table_tabel4.verticalHeader().setCascadingSectionResizes(False)
        self.table_tabel4.verticalHeader().setHighlightSections(True)
        self.tab_curs.addTab(self.curs4, "")
        self.label_3 = QtWidgets.QLabel(self.centralwidget)
        self.label_3.setGeometry(QtCore.QRect(10, 20, 60, 14))
        self.label_3.setObjectName("label_3")
        self.label_name = QtWidgets.QLabel(self.centralwidget)
        self.label_name.setGeometry(QtCore.QRect(60, 20, 111, 16))
        self.label_name.setText("")
        self.label_name.setObjectName("label_name")
        self.label_6 = QtWidgets.QLabel(self.centralwidget)
        self.label_6.setGeometry(QtCore.QRect(190, 20, 60, 14))
        self.label_6.setObjectName("label_6")
        self.label_grup = QtWidgets.QLabel(self.centralwidget)
        self.label_grup.setGeometry(QtCore.QRect(230, 20, 60, 14))
        self.label_grup.setText("")
        self.label_grup.setObjectName("label_grup")
        MainWindow.setCentralWidget(self.centralwidget)

        self.retranslateUi(MainWindow)
        self.tab_curs.setCurrentIndex(0)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "??????????????"))
        item = self.table_tabel1.horizontalHeaderItem(0)
        item.setText(_translate("MainWindow", "??????????????"))
        item = self.table_tabel1.horizontalHeaderItem(1)
        item.setText(_translate("MainWindow", "?????????? ????????????????????"))
        item = self.table_tabel1.horizontalHeaderItem(2)
        item.setText(_translate("MainWindow", "??????????"))
        item = self.table_tabel1.horizontalHeaderItem(3)
        item.setText(_translate("MainWindow", "????????????"))
        self.tab_curs.setTabText(self.tab_curs.indexOf(self.curs1), _translate("MainWindow", "1 ????????"))
        item = self.table_tabel2.horizontalHeaderItem(0)
        item.setText(_translate("MainWindow", "??????????????"))
        item = self.table_tabel2.horizontalHeaderItem(1)
        item.setText(_translate("MainWindow", "?????????? ????????????????????"))
        item = self.table_tabel2.horizontalHeaderItem(2)
        item.setText(_translate("MainWindow", "??????????"))
        item = self.table_tabel2.horizontalHeaderItem(3)
        item.setText(_translate("MainWindow", "????????????"))
        self.tab_curs.setTabText(self.tab_curs.indexOf(self.curs2), _translate("MainWindow", "2 ????????"))
        item = self.table_tabel3.horizontalHeaderItem(0)
        item.setText(_translate("MainWindow", "??????????????"))
        item = self.table_tabel3.horizontalHeaderItem(1)
        item.setText(_translate("MainWindow", "?????????? ????????????????????"))
        item = self.table_tabel3.horizontalHeaderItem(2)
        item.setText(_translate("MainWindow", "??????????"))
        item = self.table_tabel3.horizontalHeaderItem(3)
        item.setText(_translate("MainWindow", "????????????"))
        self.tab_curs.setTabText(self.tab_curs.indexOf(self.curs3), _translate("MainWindow", "3 ????????"))
        item = self.table_tabel4.horizontalHeaderItem(0)
        item.setText(_translate("MainWindow", "??????????????"))
        item = self.table_tabel4.horizontalHeaderItem(1)
        item.setText(_translate("MainWindow", "?????????? ????????????????????"))
        item = self.table_tabel4.horizontalHeaderItem(2)
        item.setText(_translate("MainWindow", "??????????"))
        item = self.table_tabel4.horizontalHeaderItem(3)
        item.setText(_translate("MainWindow", "????????????"))
        self.tab_curs.setTabText(self.tab_curs.indexOf(self.curs4), _translate("MainWindow", "4 ????????"))
        self.label_3.setText(_translate("MainWindow", "??????????????:"))
        self.label_6.setText(_translate("MainWindow", "????????????:"))


if __name__ == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    MainWindow = QtWidgets.QMainWindow()
    ui = Ui_MainWindow()
    ui.setupUi(MainWindow)
    MainWindow.show()
    sys.exit(app.exec_())
