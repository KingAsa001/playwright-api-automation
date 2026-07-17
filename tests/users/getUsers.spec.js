const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Users API', () => {

    test('Get all users', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.get('/users');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.users.length).toBeGreaterThan(0);
        expect(body.total).toBeGreaterThan(0);

    });

});
