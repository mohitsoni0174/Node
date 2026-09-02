const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Notes App!");
});

app.post("/create", (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = new notesModel.create({
      title,
      description,
    });
    return res.status(201).json({
      message: "Note created successfully",
      note: newNote,
    });
  } catch (error) {
    console.log("error in creating note", error);
    res.status(500).json({
      message: "Error creating note",
    });
  }
});

module.exports = app;
