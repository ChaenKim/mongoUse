const mongoose = require("mongoose");
const Page = require("./Page");
const User = require("./User");

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  postBy: { type: String, ref: "User", required: true },
  pages: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Page",
      required: true
    }
  ],
  likes: Number,
  comments: [{ type: mongoose.Schema.ObjectId, ref: "Comment" }],
  ingredients: [{ type: mongoose.Schema.ObjectId, ref: "Ingredient" }],
  cookingMinutes: Number
});

module.exports = mongoose.model("Recipe", RecipeSchema);
module.exports = RecipeSchema;
