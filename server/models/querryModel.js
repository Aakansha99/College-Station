const mongoose = require("mongoose");

const querySchema = {
    query: String,
    askedBy: String,
    answered: Boolean
  };
  const Query = mongoose.model("Query", querySchema);

  module.exports = Query;