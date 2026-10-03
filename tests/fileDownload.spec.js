const { test, expect } = require('@playwright/test');

test('File Download Test', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/download');

  // start waiting for download
  const downloadPromise = page.waitForEvent('download');

  // click file
  await page.click('text=some-file.txt');

  const download = await downloadPromise;

  // save file
  await download.saveAs('downloads/some-file.txt');

});