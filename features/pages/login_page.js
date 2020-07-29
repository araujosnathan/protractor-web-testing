let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

var LoginPage = function(){

  var email                         = element(by.id('session_key')),
      password                      = element(by.id('session_password')),
      login_button                  = element(by.css('.sign-in-form__submit-button')),
      session_key_login_error       = element(by.id('error-for-username')),
      session_password_login_error  = element(by.id('error-for-password')),
      feed_tab_icon                 = element(by.id('feed-tab-icon'))

  this.visit = function(url) {
    browser.get(url);
  }
  this.login = function(username, pass) {
      email.clear();
      email.sendKeys(username);
      password.clear();
      password.sendKeys(pass);
      login_button.click();
  };

  this.checkUserError = function(callback) { 
    expect(session_key_login_error.isDisplayed()).to.eventually.to.exist.and.notify(callback);
  };

  this.checkPasswordError = function(callback) {
    expect(session_password_login_error.isDisplayed()).to.eventually.to.exist.and.notify(callback);
  };

  this.checkLoginSuccess = function(callback) {
    expect(feed_tab_icon.isDisplayed()).to.eventually.to.exist.and.notify(callback);
  };
};

module.exports = LoginPage;
