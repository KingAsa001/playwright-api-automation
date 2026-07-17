const { request } = require("@playwright/test");
require("dotenv").config();

class ApiClient {

    async getContext() {

        console.log("================================");
        console.log("BASE_URL =", process.env.BASE_URL);
        console.log("================================");

        return await request.newContext({
            baseURL: process.env.BASE_URL,
            extraHTTPHeaders: {
                Accept: "application/json"
            }
        });
    }

}

module.exports = ApiClient;