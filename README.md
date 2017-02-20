# protractor-web-testing

Hey everyone,

It's a basic project for WEB Testing using Protractor for AngularJS e Non-AngularJS Application. </br>
Let's automate! </br>

First of all, you have to download/clone this project.</br>

Do you have node/npm installed on your PC? if not, you can download in this link: https://nodejs.org/en/download/

# How to install

* git clone https://github.com/nathsilv/protractor-web-testing.git </br>
* npm install -g protractor
* webdriver-manager update

Now you have this project on your PC and all you need installed.</br>
Let's understand  each file!

# FILE: pages/login_page.js

This file contains the page object that will be use, it's the model!</br>
You can put all page objects in this folder: pages

# tests/login.js

Here, we have all tests! In this project i am testing the LinkedIn website, specifically login feature! </br>

# How to run the tests?

First, you need up the selenium server </br>

* webdriver-manager start

Now you can run the tests, you just need execute: </br>
* protractor config.js --suite login

In config.js file we have our suites, it facilites when you have many features for testing, so we use "--suite [suite_name]"
for specify what suite you want to execute. </br>
