//* Import Express and setup server
const express = require("express");
const server = express();

//* Ensure Express can parse the JSON results
server.use(express.json());

//* Export Server
module.exports = server;
