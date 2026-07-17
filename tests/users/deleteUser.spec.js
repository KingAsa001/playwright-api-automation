const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Users API', () => {

    test('Delete user', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.delete('/users/1');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.isDeleted).toBe(true);

    });

});
