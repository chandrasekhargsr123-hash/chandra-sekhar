const {test , expect} = require('@playwright/test')

test.describe('Hooks Demo - sauceDemo', () => {

    test.beforeEach(async ({page}) =>{
        console.log(' Before Eaach - Opening site');

        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
    });

    test.afterEach(async({page}) =>{
        console.log('After Each - Closing page');
        await page.close();
    });

    test('Verify Inventory page',async ({page}) =>{
        await expect(page).toHaveURL(/inventory/);
    });

    test('Verify Product Title', async ({page}) => {
        const title = await page.locator('.title').textContent();
        await expect(title).toContain('Products');
    });
});