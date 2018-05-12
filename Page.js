const mongoose = require("mongoose");
const Recipe = require("./Recipe");

const PageSchema = new mongoose.Schema({
  index: Number,
  text: String,
  imageUrl: String,
  videoUrl: String,
  recipeBelong: { type: String, ref: "Recipe" }
});

module.exports = mongoose.model("Page", PageSchema);
module.exports = PageSchema;
