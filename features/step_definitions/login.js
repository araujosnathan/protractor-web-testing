
var LoginPage = require('../pages/login_page.js'),
    valid_account = browser.params.valid_linkedin_account,
    invalid_account = browser.params.invalid_linkedin_account;


module.exports = function() {
      loginLinkedinPage = new LoginPage();

  this.Given(/^i am on LinkedIn website$/, function () {
          loginLinkedinPage.visit("https://www.linkedin.com/");
       });

  this.When(/^i do login with invalid email$/, function () {
          loginLinkedinPage.login(invalid_account.username, valid_account.password);
       });

  this.Then(/^i should to see an error message about this invalid email$/,  {timeout: 50 * 1000}, function (callback) {
          loginLinkedinPage.checkUserError(callback);
       });

  this.When(/^i do login with invalid password$/, function () {
          loginLinkedinPage.login(valid_account.username, invalid_account.password);
       });

  this.Then(/^i should to see an error message about this invalid password$/,  {timeout: 50 * 1000}, function (callback) {
          loginLinkedinPage.checkPasswordError(callback);
       });

  this.When(/^i do login with valid account$/, function () {
          loginLinkedinPage.login(valid_account.username, valid_account.password);
       });

  this.Then(/^i should to see LinkedIn FeedPages$/,  {timeout: 50 * 1000}, function (callback) {
          loginLinkedinPage.checkLoginSuccess(callback);
        });
};
