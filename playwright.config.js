const { defineConfig } = require("@playwright/test");
require("dotenv").config();

module.exports = defineConfig({

    testDir: "./tests",

    timeout: 30000,

    fullyParallel: true,

    reporter: [
        ["list"],
        ["html"]
    ],

    use: {

        baseURL: process.env.BASE_URL,

        ignoreHTTPSErrors: true,

        extraHTTPHeaders: {
            Accept: "application/json"
        }

    }

});
