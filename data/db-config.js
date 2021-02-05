//* Import knex and config file
const knex = require("knex");
const config = require("../knexfile");

//* Setup the configured knex
const configureKnex = knex(config.development);

//* Export Module
module.exports = configureKnex;
