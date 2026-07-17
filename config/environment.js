require("dotenv").config();

module.exports = {
    baseURL: process.env.BASE_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    token: process.env.TOKEN
};
