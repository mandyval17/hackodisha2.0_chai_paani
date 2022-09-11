const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema({
  otp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Otp", OTPSchema);
