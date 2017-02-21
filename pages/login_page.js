var LoginPage = function(){

  var email = element(by.id('login-email')),
      password = element(by.id('login-password')),
      login_button = element(by.id('login-submit'));

  this.login = function(username, pass) {
      email.clear();
      email.sendKeys(username);
      password.clear();
      password.sendKeys(pass);
      login_button.click();
  };

  this.checkUserError = function() {
    expect(element(by.id('session_key-login-error')).isDisplayed()).toBeTruthy();
  };

  this.checkPasswordError = function() {
    expect(element(by.id('session_password-login-error')).isDisplayed()).toBeTruthy();
  };

  this.checkLoginSucess = function() {
    expect(element(by.id('feed-tab-icon')).isDisplayed()).toBeTruthy();
  };
};

module.exports = LoginPage;
