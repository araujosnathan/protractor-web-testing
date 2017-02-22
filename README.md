# protractor-web-testing

Hey everyone,

It's a basic project for WEB Testing using Protractor for AngularJS e Non-AngularJS Application with Cucumber. </br>
Let's automate! </br>

First of all, you have to download/clone this project.</br>

Do you have node/npm installed on your PC? if not, you can download in this link: https://nodejs.org/en/download/

# How to install

* git clone https://github.com/nathsilv/protractor-web-testing.git </br>
* npm install

Now you have this project on your PC and all dependencies you need installed.</br>
Let's understand  each file!

# FILE: features/login.feature

This file is our living documentation. It is all test scenarios that will be executed. </br>
it is in natural language for better understand (It is great for stakeholders).

# FILE: features/pages/login_page.js

This file contains the page object that will be use, it's the model!</br>
You can put all page objects in this folder: pages

# FILE: features/step_definitions/login.js

Here, we have all tests! In this project i am testing the LinkedIn website, specifically login feature! </br>

# FILE: config.js

In this file we have all config that we will need for our test. This file has configs about browser, params, reporter, and execution. You can put in this file all config that you thing it is necessary.

# FILE: package.json

In this file we have our signature and dependencies that project will need!</br>
Once that you have all dependencies in this file you just need to execute: 'npm install' to install them.</br>
This way is practice for exporting your project and you don't have a hard word for installing each dependency manually.

# How to run the tests?

Now you can run the tests, you just need execute: </br>
* protractor config.js

You can change params values of the config file in the moment that you execute the tests, like:</br>
* protractor config.js --params.[your_param].[your_field]=[value] </br>
For exemple in configs file: </br>

<pre><code>params: {
   valid_linkedin_account: {
     'username': 'valid_user@gmail.com',
     'password': 'valid_pass'
   }</pre></code>

You can change that, like:</br>
* protractor config.js --params.valid_linkedin_account.username=new_username </br></br>
Then, all tests will run with new params that you changed!
