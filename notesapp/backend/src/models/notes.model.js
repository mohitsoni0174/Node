const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
  },
});

const notesModel = mongoose.model("Note", notesSchema);

module.exports = notesModel;
