from PyQt5 import QtWidgets
from widgets import Login





App =QtWidgets.QApplication([])
window= Login.Login()
window.show()
App.exec()
