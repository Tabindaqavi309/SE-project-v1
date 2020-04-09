const mongoose = require("mongoose");
const Product = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  productDescription: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    lowercase: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  discount: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: "Active",
    lowercase: true,
    trim: true
  },
  picture: {
    type: String
  }
});

module.exports = mongoose.model("Product", Product);
