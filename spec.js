describe("Feature: Login Facebook", function(){
  it("it is no possible login with email worng",
    function(){
      browser.get("https://www.facebook.com/");
      var until = protractor.ExpectedConditions;
      browser.wait(until.presenceOf(element(by.id('facebook'))), 5000, 'Element taking too long to appear in the DOM');
      browser.sleep(20)
      //element(by.id('email')).sendKeys('wrong_email@gmail.com');
      // element(by.id('pass')).send_keys("stacknowovrflow7");
      element(by.id('u_0_u')).click();
      // expect(element(by.class('_4rbf _53ij"')));
    });
});
