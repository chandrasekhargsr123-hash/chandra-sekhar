const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 30000,

  retries: 1,

  use: {
    browserName: 'chromium',
    headless: false,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  reporter: [
    ['html', { open: 'always' }]
  ]
});