# protractor-web-testing

Hey everyone,

It's a basic project for WEB Testing using Protractor for AngularJS e Non-AngularJS Application. </br>
Let's automate! </br>

First of all, you have to download/clone this project.</br>

Do you have node/npm installed on your PC? if not, you can download in this link: https://nodejs.org/en/download/

# How to install

* git clone https://github.com/nathsilv/protractor-web-testing.git </br>
* npm install -g protractor
* npm install jasmine-spec-reporter
* webdriver-manager update

Now you have this project on your PC and all you need installed.</br>
Let's understand  each file!

# FILE: pages/login_page.js

This file contains the page object that will be use, it's the model!</br>
You can put all page objects in this folder: pages

# FILE: tests/login.js

Here, we have all tests! In this project i am testing the LinkedIn website, specifically login feature! </br>

# FILE: config.js

In this file we have all config that we will need for our test. This file has configs about browser, params, reporter, and execution. You can put in this file all config that you thing it is necessary.

# How to run the tests?

First, you need up the selenium server </br>

* webdriver-manager start

Now you can run the tests, you just need execute: </br>
* protractor config.js --suite login

In config.js file we have our suites, it facilites when you have many features for testing, so we use "--suite [suite_name]"
for specify what suite you want to execute. </br>

You can change params values of the config file in the moment that you execute the tests, like:</br>
* protractor config.js --suite login --params.[your_param].[your_field]=[value] </br>
For exemple in configs file: </br>

<pre><code>params: {
   valid_linkedin_account: {
     'username': 'valid_user@gmail.com',
     'password': 'valid_pass'
   }</pre></code> 

You can change that, like:</br>
* protractor config.js --suite login --params.valid_linkedin_account.username=new_username </br>
Then, all tests will run with new params that you changed!
