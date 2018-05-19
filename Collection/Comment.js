const mongoose = require("mongoose");
const User = require("./User");

const CommentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  writtenBy: { type: String, ref: "User", required: true },
  writtenDate: Date
});

module.exports = mongoose.model("Comment", CommentSchema);
module.exports = CommentSchema;
