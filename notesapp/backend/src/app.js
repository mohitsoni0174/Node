const express = require("express");
const connectDB = require("./config/db.js");
const notesModel = require("./models/notes.model.js");
const app = express();
const createNotesController = require("./controllers/notes.controller.js");
const notesRoutes = require("./routes/notes.routes.js");

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the Notes App!");
});

app.use("/notes", notesRoutes);

module.exports = app;
