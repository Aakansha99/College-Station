const mongoose = require("mongoose");

const solutionSchema = {
    query: String,
    solution: String,
    answeredBy: String,
    liked: { 
      type:Boolean,
      default:false,
      required:true

    },
    disliked: {
      type:Boolean,
      default:false,
      required:true
    }
  };
  const Solution = mongoose.model("Solution", solutionSchema);
  module.exports = Solution;