const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true, // **Corrección: Cambié `require` por `required` (es el término correcto).**
  },
  description: {
    type: String,
    required: true, // **Corrección: Cambié `require` por `required`.**
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema); // **Corrección: Exporté el modelo `Post`.**
