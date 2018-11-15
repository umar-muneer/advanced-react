// let's go!
require("dotenv").config({ path: "variables.env"});
const createServer = require("./createServer");
const db = require("./db");
const server = createServer();

server.start({
    cors: {
        credentials: false,
        origin: process.env.FRONTEND_URL
    }
}, deets => {
    console.log(`the server is running on http:/localhost:${deets.port}`);
});