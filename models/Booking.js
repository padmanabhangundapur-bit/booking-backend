const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userEmail: String,
  slot: String,
  status: { type: String, default: "booked" }
});

module.exports = mongoose.model("Booking", bookingSchema);