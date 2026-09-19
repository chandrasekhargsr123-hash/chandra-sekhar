const base = require('@playwright/test');

exports.test = base.test.extend({
  
  loginPage: async ({ page }, use) => {
    const LoginPage = require('../pages/LoginPage');
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }

});

exports.expect = base.expect;