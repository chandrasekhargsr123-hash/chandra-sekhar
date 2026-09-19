const { test, expect } = require('../fixtures/testBase');

test.describe('Dashboard Tests', () => {

  test.beforeEach(async ({ loginPage }) => {
    // Open site
    await loginPage.goto();

    // Login with valid user
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Dashboard URL Validation', async ({ page }) => {

    // Verify user landed on dashboard
    await expect(page).toHaveURL(/inventory/);

  });

  test('Dashboard Elements Visibility', async ({ page }) => {

    // Check product container visible
    const products = page.locator('.inventory_list');
    await expect(products).toBeVisible();

  });

  test('Logout Functionality', async ({ page }) => {

    // Click menu
    await page.click('#react-burger-menu-btn');

    // Click logout
    await page.click('#logout_sidebar_link');

    // Verify back to login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

});