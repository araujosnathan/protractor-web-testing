
browser.ignoreSynchronization = true;
var LoginPage = require('../pages/login_page'),
    valid_account = browser.params.valid_linkedin_account,
    invalid_account = browser.params.invalid_linkedin_account;

describe("Login LinkedIn\n", function(){
  var login_linkedin;

  beforeEach(function(){
    login_linkedin = new LoginPage();
    browser.get("https://www.linkedin.com/");
  });

  it("It is not possible to do login with invalid email", function(){
    login_linkedin.login(invalid_account.username, valid_account.password);
    expect(element(by.id('session_key-login-error')).isDisplayed()).toBeTruthy();
  });

  it("It is not possible to do login with invalid password", function(){
    login_linkedin.login(valid_account.username, invalid_account.password);
    expect(element(by.id('session_password-login-error')).isDisplayed()).toBeTruthy();
  });

  it("It is possible to do login with valid account", function(){
    login_linkedin.login(valid_account.username, valid_account.password);
    expect(element(by.id('feed-tab-icon')).isDisplayed()).toBeTruthy();
  });

});
