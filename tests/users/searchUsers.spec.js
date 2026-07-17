const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Users API', () => {

    test('Search users', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.get('/users/search?q=John');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.users.length).toBeGreaterThan(0);

    });

});
