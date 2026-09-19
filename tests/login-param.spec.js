const { test, expect } = require('@playwright/test');

const users = [
  { username: 'standard_user', password: 'secret_sauce', valid: true },
  { username: 'wrong_user', password: 'wrong_pass', valid: false }
];

users.forEach(user => {

  test(`Login test for ${user.username}`, async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', user.username);
    await page.fill('#password', user.password);

    await page.locator('#login-button').waitFor();
await page.click('#login-button');

    if (user.valid) {
      await expect(page).toHaveURL(/inventory/);
    } else {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    }

  });

});

//day 8 programS