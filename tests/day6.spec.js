const { test, expect } = require('@playwright/test');

test('Wait Handling Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // ✅ Wait using assertion (BEST)
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Extra safety (optional)
  await page.waitForLoadState('networkidle');

  await page.pause();

});