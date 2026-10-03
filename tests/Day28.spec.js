import {test ,expect} from '@playwright/test'

test('Day288 - Stable E-commerce Flow', async ({page}) => {

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name','standard_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');

    await expect(page.locator('.inventory_list')).toBeVisible();

    const product = page.locator('.inventory_item').first();
    await expect(product).toBeVisible();

    await product.locator('text=Add to cart').click();

    const cartBadge = page.locator('.shopping_cart_badge');

    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText('1');

    await page.click('.shopping_cart_link');

    await expect(page.locator('.cart_list')).toBeVisible();
});