const {test , expect} = require('@playwright/test');
const { request } = require('http');

test('Validate API Response', async ({request}) => {
    const response = await request.post('https://reqres.in/api/users/' , {
        data: {
            name:'chandra',
            job: 'tester'
        }
    });

    console.log (await response.json());

    expect(response.status()).toBe(201);
    expect(body.name).toBe('chandra')

   
});