const express = require("express");

const planetsRouters = require("./planets/planets.router.js");
const launchesRouters = require("./launches/launches.router.js");

const api = express.Router();

api.use("/planets", planetsRouters);
api.use("/launches", launchesRouters);

module.exports = api;
