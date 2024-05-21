# Copyright (c) 2023, Xurpas AI Lab and contributors
# For license information, please see license.txt

import frappe
import shutil
from frappe.utils import get_site_name
from frappe.model.document import Document

class XeedChatbotFrontendSettings(Document):
	pass


@frappe.whitelist()
def deploy():
	# sourceDir = '../apps/xeedchatbot/frontend'
	# destDir='./'+get_site_name(frappe.local.request.host)+'/public/files/chatbot'
	# print(f'REMOVING {destDir}')
	# try:
	# 	shutil.rmtree(destDir)
	# except:
	# 	pass
	# print(f'COPYING {sourceDir} TO {destDir}')
	# try:
	# 	shutil.copytree(sourceDir, destDir) 
	# except:
	# 	pass
	pass