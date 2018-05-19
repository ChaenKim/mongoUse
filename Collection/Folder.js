const mongoose = require("mongoose");
const Recipe = require("./Recipe");
const User = require("./User");

const FolderSchema = new mongoose.Schema({
  name: {type: String, require: true},
  recipes: [{type: String, ref: "Recipe"}],
  userBelong : {type: String, ref: "User"}
});

module.exports = mongoose.model("Folder", FolderSchema);
module.exports = FolderSchema;
