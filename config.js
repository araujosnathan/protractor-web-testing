// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    login: './tests/login.js',
  },

  // It is great for credentials that you can be to use on your project
  params: {
    valid_linkedin_account: {
      'username': 'valid_user@gmail.com',
      'password': 'valid_pass'
    },

    invalid_linkedin_account: {
      'username': 'invalid_user@gmail.com',
      'password': 'invalid_pass'
    },

  },
  //This 'onPrepare' does a reporter about your test execution using jasmine reporter
  onPrepare: function(){
    let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

    jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailedSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
    }));
  },
  // Choose browser for executing the tests
  // capabilities: {
  //   'browserName': 'firefox'
  // }

  // Choose browsers that will run the tests in parallel
  // multiCapabilities: [{
  //   'browserName': 'chrome'
  // }, {
  //   'browserName': 'firefox',
  // }]

  //specs: ['./tests/login.js'],


}
