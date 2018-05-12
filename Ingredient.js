const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    require: true,
    enum: ["main", "sub"]
  }
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
module.exports = IngredientSchema;
