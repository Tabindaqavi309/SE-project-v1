const mongoose = require("mongoose");
const Coupon = new mongoose.Schema({
  couponName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  couponType: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  value: {
    type: Number,
    required: true,
    lowercase: true,
    trim: true
  },
  billAmount: {
    type: Number,
    required: true,
    lowercase: true,
    trim: true
  },
  product: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  status: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  }
});

module.exports = mongoose.model("Coupon", Coupon);
