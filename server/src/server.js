const http = require("http");
const { mongoConnect } = require("./services/mongo");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
