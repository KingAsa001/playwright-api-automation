// Write your Playwright test here
const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Smoke Tests', () => {

    test('API is reachable', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.get('/products');

        expect(response.status()).toBe(200);

    });

});