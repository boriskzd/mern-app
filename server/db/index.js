const mongoose = require("mongoose");

// setup mongoose for easy usage of MongoDB and export it as db
// it listens port "mongodb://127.0.0.1:27017/users"
mongoose
  .connect("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
