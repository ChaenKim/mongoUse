const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
  index: Number,
  text: String,
  imageUrl: String,
  videoUrl: String
});

module.exports = mongoose.model("Page", PageSchema);
module.exports = PageSchema;
