const { request } = require("@playwright/test");
require("dotenv").config();

class ApiClient {
    async getContext() {
        return await request.newContext({
            baseURL: process.env.BASE_URL,
            extraHTTPHeaders: {
                Accept: "application/json"
            }
        });
    }
}

module.exports = ApiClient;