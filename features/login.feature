# language : en

Feature: Login LinkedIn

Background: It is on LinkedIn Website
  Given i am on LinkedIn website

Scenario: It is not possible to do login with invalid email
  When i do login with invalid email
  Then i should to see an error message about this invalid email

Scenario: It is not possible to do login with invalid password
  When i do login with invalid password
  Then i should to see an error message about this invalid password

Scenario: It is not possible to do login with valid accont
  When i do login with valid account
  Then i should to see LinkedIn FeedPages
