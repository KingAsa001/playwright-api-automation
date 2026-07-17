const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Users API', () => {

    test('Get single user', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.get('/users/1');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.id).toBe(1);
        expect(body.firstName).toBeTruthy();
        expect(body.email).toContain('@');

    });

});
