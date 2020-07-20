// server framework for node
const express = require("express");
const bodyParser = require("body-parser");
// for enabling cors
const cors = require("cors");
// import mongoose db / mongo db framework
const db = require("./db");
//
const userRouter = require("./routes/user-router");

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// on homepage we see Hello World!
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// just a test for server subdomains
app.get("/test", (req, res) => {
  res.send("Hello subdomain test");
});

app.use("/api", userRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
