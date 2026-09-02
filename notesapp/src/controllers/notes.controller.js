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

const getSingleNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let note = await notesModel.findById(noteId);
    res
      .status(200)
      .json({ message: "Note retrieved successfully", data: note });
  } catch (error) {
    console.log("error in retrieving note by id", error);
    res.status(500).json({ message: "Error retrieving note" });
  }
};

const updateNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let { title, description } = req.body;

    let updatedNote = await notesModel.findByIdAndUpdate(
      noteId,
      {
        title,
        description,
      },
      {
        new: true,
      },
    );
    res
      .status(200)
      .json({ message: "Note updated successfully", data: updatedNote });
  } catch (error) {
    console.log("error in updating note", error);
    res.status(500).json({ message: "Error updating note" });
  }
};

const deleteNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;
   await notesModel.findByIdAndDelete(noteId);
    return res.status(200)
      .json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("error in deleting note", error);
    res.status(500).json({ message: "Error deleting note" });
  }
};

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updateNoteController,
  deleteNoteController,
};
