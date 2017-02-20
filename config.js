// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    login: './tests/login.js',
  },
  //specs: ['./tests/login.js'],
}
