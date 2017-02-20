var LoginPage = function(){

  var email = element(by.id('login-email'));
  var password = element(by.id('login-password'));
  var login_button = element(by.id('login-submit'));

  this.login = function(username, pass) {
      email.clear();
      email.sendKeys(username);
      password.clear();
      password.sendKeys(pass);
      login_button.click();
  };
};

module.exports = LoginPage;
