// Write your Playwright test here
const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Comments Module', () => {

    test('Get all comments', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.get('/comments');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.comments.length).toBeGreaterThan(0);

    });

});