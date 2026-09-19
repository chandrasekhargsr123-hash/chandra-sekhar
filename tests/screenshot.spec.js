const {test , expect} = require('@playwright/test');

test ('Screenshot Example', async({page}) =>{

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name ', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    await page.screenshot({path: 'screenshot/login.png'});

    await page.click('#login-button');
});