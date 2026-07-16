// Write your Playwright test here
const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Posts Module', () => {

    test('Get all posts', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.get('/posts');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.posts.length).toBeGreaterThan(0);

        console.log(body.posts.length);

    });

});