// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    login: './tests/login.js',
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
