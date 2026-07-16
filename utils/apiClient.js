const { request } = require("@playwright/test");
const environment = require("../config/environment");

class ApiClient {

    async getContext() {

        return await request.newContext({
            baseURL: environment.baseURL,

            extraHTTPHeaders: {
                Accept: "application/json"
            }

        });

    }

}

module.exports = ApiClient;
