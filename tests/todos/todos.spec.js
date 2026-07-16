// Write your Playwright test here
const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/apiClient');

test.describe('Todos Module', () => {

    test('Get all todos', async () => {

        const api = new ApiClient();
        const context = await api.getContext();

        const response = await context.get('/todos');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.todos.length).toBeGreaterThan(0);

        console.log(body.todos.length);

    });

});