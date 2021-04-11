const mongoose = require("mongoose");

const chat = new mongoose.Schema({
  user1: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  user2: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  messages: [
    {
      content: String,
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      createdDate: { type: Date, default: Date.now() },
    },
  ],
});

module.exports = mongoose.model("Chat", chat);
