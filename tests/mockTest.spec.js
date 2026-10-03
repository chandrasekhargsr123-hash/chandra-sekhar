const { test, expect } = require('@playwright/test');

test('Mock Login API Test', async ({ page }) => {

  // Step 1: Mock API
  await page.route('https://reqres.in/api/login', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        token: 'fake-token-123'
      })
    });
  });

  // Step 2: Open site
  await page.goto('https://reqres.in/');

  // Step 3: Trigger API manually
  const response = await page.request.post('https://reqres.in/api/login', {
    data: {
      email: 'test@test.com',
      password: '123456'
    }
  });

  const result = await response.json();

  console.log(result);

  // Step 4: Validate
  expect(result.token).toBe('fake-token-123');
});