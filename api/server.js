//* Import Express and setup server
const express = require("express");
const server = express();

//* Ensure Express can parse the JSON results
server.use(express.json());

//* Import Routers
const recipesRouter = require("./recipes/recipes-router");
const ingredientsRouter = require("./ingredients/ingredients-router");

//* Setup routers
server.use("/api/recipes", recipesRouter);
server.use("/api/ingredients", ingredientsRouter);

//* Export Server
module.exports = server;
