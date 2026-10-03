const { test } = require('@playwright/test');

exports.baseTest = test.extend({
  page: async ({ page }, use) => {
    await page.goto('https://www.saucedemo.com/');
    await use(page);
  }
});