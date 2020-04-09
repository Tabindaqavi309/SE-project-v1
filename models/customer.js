const mongoose = require("mongoose");
const Customer = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  contactNumber: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  emailAddress: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 7,
    max: 12
  },
  PersonalInfo: {
    Address: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    Country: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    postalCode: {
      type: Number
    },
    City: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    }
  }
});

module.exports = mongoose.model("Customer", Customer);
