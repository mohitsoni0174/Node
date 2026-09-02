const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Notes App!");
});

module.exports = app;
