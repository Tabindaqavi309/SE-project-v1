const mongoose = require("mongoose");
const Category = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  brandName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },

  picture: {
    type: String
  }
});

module.exports = mongoose.model("Category", Category);
