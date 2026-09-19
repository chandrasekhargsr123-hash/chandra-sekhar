const { test, expect } = require('@playwright/test');

test('Handle Inputs + Dropdown', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Assertion
  await expect(page).toHaveURL(/inventory/);

  // Dropdown handling
  await page.selectOption('.product_sort_container', 'za');

  // Validate dropdown applied
  await expect(page.locator('.product_sort_container')).toHaveValue('za');

});