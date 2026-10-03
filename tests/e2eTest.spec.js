import {test , expect} from '@playwright/test';

test ('End-to-End Purchase Flow', async ({page}) =>{

    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(5000);
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce')
    await page.waitForTimeout(5000);
    await page.click('#login-button');
    

    await expect(page.locator('.inventory_list')).toBeVisible();
    await page.waitForTimeout(5000);

    await page.click('text=Sauce Labs BackPack');
    await page.waitForTimeout(5000);

    await page.click('button:has-text("Add to cart")');

    await page.click('.shopping_cart_link');

    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    await page.click('#checkout');
    await page.waitForTimeout(5000);

    await page.fill('#first-name', 'chandra');
    await page.fill('#last-name', 'Test');
    await page.fill('#postal-code','500028');
    await page.click('#continue');

  
  await page.click('#finish');

  
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});

