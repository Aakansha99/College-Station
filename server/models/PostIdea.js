const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  heading: String,

  problem: String,
  solution: String,

  pictures: [{ img: { type: String } }],
  creatorID: String,
  creatorName: String,
  team_member: [String],
  hashtags: [String],
  selectedFile: String,
  links: [String],
  likes: { type: [String], default: [] },
  collab:{
      type:Boolean,
      default:false,
      required:true
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
