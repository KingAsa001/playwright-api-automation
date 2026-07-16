// Write your Playwright test here
const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Negative Tests', () => {

    test('Login with invalid credentials', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.post('/auth/login', {
            data: {
                username: 'wronguser',
                password: 'wrongpassword'
            }
        });

        expect(response.status()).toBe(400);

        const body = await response.json();

        expect(body.message).toBeTruthy();

        console.log(body);

    });

});