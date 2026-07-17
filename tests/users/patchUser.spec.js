const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Users API', () => {

    test('Patch user', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.patch('/users/1', {
            data:{
                age:35
            }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.age).toBe(35);

    });

});
