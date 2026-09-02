const notesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await notesModel.create({
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
};

const getAllNotesController = async (req, res) => {
  try {
    let allNotes = await notesModel.find();

    return res.status(200).json({
      message: "All notes retrieved successfully",
      data: allNotes,
    });
  } catch (error) {
    console.log("error in retrieving all notes", error);

    res.status(500).json({
      message: "Error retrieving all notes",
    });
  }
};

module.exports = {
  createNotesController,
  getAllNotesController,
};
