const mongoose = require("mongoose");
const Recipe = require("./Recipe");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Recipe"
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);
module.exports = UserSchema;
