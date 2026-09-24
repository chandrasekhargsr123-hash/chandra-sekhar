const { test, expect } = require('../fixtures/testBase');
const { getData } = require('../utils/excelReader');
const LoginPage = require('../pages/LoginPage');

const users = getData('LoginData');   // 👈 Excel Sheet name

for (const user of users) {

  test(`Login Test - ${user.username}`, async ({ page }) => {

    const login = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');

    await login.login(user.username, user.password);

    // valid user check (simple example)
    if (user.username === "standard_user") {
      await expect(page).toHaveURL(/inventory/);
    } else {
      await expect(page.locator('.error-message-container')).toBeVisible();
    }

  });

}