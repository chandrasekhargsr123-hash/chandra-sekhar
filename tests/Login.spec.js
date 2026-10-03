const {expect } =require('@playwright/test');
const {baseTest} = require('../fixtures/baseTest');
const loginData = require('../utils/testdata.json');

baseTest('Valid Login Test', async({page}) =>{

  await page.fill('#user-name',loginData.username);
  await page.fill('#password',loginData.password);
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);
});