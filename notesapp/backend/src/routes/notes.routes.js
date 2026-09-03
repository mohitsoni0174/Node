const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updateNoteController,
  deleteNoteController,
  singleNoteUpdateController,
} = require("../controllers/notes.controller");

const router = express.Router();
//create api
router.post("/create", createNotesController);

//get all notes api
router.get("/allNotes", getAllNotesController);

//get single note api
router.get("/:id", getSingleNoteController);

//update via put api
router.put("/:id", updateNoteController);

//update via patch api
router.patch("/:id/single", singleNoteUpdateController);

//delete note api
router.delete("/:id", deleteNoteController);

module.exports = router;
