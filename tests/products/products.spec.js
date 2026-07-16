// Write your Playwright test here
const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Products Module', () => {

    test('Get all products', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.get('/products');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.products.length).toBeGreaterThan(0);

    });

});