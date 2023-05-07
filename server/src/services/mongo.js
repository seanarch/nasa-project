const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, "../../../.env"),
});

const MONGO_URL = process.env.MONGO_URI;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  mongoose.connect(MONGO_URL);
}

module.exports = { mongoConnect };
