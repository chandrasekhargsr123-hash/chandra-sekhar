const {test , expect} = require('@playwright/test');
const data = require('../utils/testdata.json');

test('Login with invalid user', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', data.invalidUser.username);
  await page.fill('#password', data.invalidUser.password);

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match');
});