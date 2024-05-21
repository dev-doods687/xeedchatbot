from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in xeedchatbot/__init__.py
from xeedchatbot import __version__ as version

setup(
	name="xeedchatbot",
	version=version,
	description="Xeed Chatbot",
	author="Xurpas AI Lab",
	author_email="andy@xurpas.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
