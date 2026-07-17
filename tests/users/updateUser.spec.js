const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Users API', () => {

    test('Update user', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.put('/users/1', {
            data:{
                firstName:'Stephen',
                age:31
            }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.age).toBe(31);

    });

});
