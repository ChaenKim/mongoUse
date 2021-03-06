const mongoose = require("mongoose");
const Recipe = require("./Recipe");
const Folder = require("./Folder");

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Folder"
    }
  ],
  comments: [{ type: mongoose.Schema.ObjectId, ref: "Comment" }],
  posts: [{ type: mongoose.Schema.ObjectId, ref: "Recipe" }]
});

module.exports = mongoose.model("User", UserSchema);
module.exports = UserSchema;
