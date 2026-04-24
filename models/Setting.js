const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  start: String,
  end: String,
  duration: Number
});

module.exports = mongoose.model("Setting", settingSchema);