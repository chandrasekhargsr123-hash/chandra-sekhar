const {test, expect} = require('@playwright/test');

test ('open google and check title', async ({page}) => {
    await page.goto('https://www.google.com');
    const  title = await page.title();
    await expect (page).toHaveTitle(/Google/);
});