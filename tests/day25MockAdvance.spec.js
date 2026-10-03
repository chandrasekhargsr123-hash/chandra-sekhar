import {test , expect} from '@playwright/test';

test ('Mock Product API Success' , async({page}) => {

    await page.route('https://reqres.in/api/users?page=2',async route => {

        await route.fulfill({
            status:200 ,
            contentType: 'application/json',
            body:JSON.stringify({
                data:[{
                    id:1, name:'chandra Tester'},
                    {id:2, name:'Automation pro'
                }]
            })
        });
    });
    await page.goto('https://reqres.in/');
});

test('Mock API Failure', async ({ page }) => {

  await page.route('**/api/users?page=2', async route => {

    await route.fulfill({
      status: 500,
      body: 'Server Error'
    });

  });

  await page.goto('https://reqres.in/');

});

test('Mock and Validate API Data', async ({ page }) => {

  await page.route('**/api/users?page=2', async route => {

    const fakeData = {
      data: [
        { id: 101, email: 'test1@mail.com' },
        { id: 102, email: 'test2@mail.com' }
      ]
    };

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(fakeData)
    });
  });

  const response = await page.request.get('https://reqres.in/api/users?page=2');
  const body = await response.json();

  console.log(body);

  expect(body.data.length).toBe(2);
  expect(body.data[0].id).toBe(101);

});