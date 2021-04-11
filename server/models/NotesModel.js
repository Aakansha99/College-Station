const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
    required: true,
  },
  owner: {
    type: String,
  },
  subject: {
    type: String,
    required: true,
  },
  subTopic: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Notes", notesSchema);
