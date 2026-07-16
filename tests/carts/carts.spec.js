// Write your Playwright test here
const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Cart Module', () => {

    test('Get all carts', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.get('/carts');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.carts.length).toBeGreaterThan(0);

    });

});