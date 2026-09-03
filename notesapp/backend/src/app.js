const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const app = express();
const notesRoutes = require("./routes/notes.routes.js");

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the Notes App!");
});

app.use("/notes", notesRoutes);

module.exports = app;
