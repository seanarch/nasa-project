const express = require("express");
const cors = require("cors");

const planetsRouters = require("./routes/planets/planets.router.js");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(planetsRouters);

module.exports = app;
