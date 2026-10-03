const {test , expect} = require('@playwright/test');

test('File Upload Test ', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.setInputFiles('#file-upload','tests/sample.txt');

    await page.click('#file-submit');

    await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');
});