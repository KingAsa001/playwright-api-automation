const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Users API', () => {

    test('Create user', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.post('/users/add', {
            data:{
                firstName:'Stephen',
                lastName:'Aina',
                age:30
            }
        });

        expect(response.status()).toBe(201);

        const body = await response.json();

        expect(body.firstName).toBe('Stephen');

    });

});
