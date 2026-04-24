const express = require("express");
const router = express.Router();
const Setting = require("../models/Setting");
const Booking = require("../models/Booking");

// SAVE / UPDATE + CLEAR BOOKINGS
router.post("/", async (req, res) => {
  const { start, end, duration } = req.body;

  let setting = await Setting.findOne();

  if (setting) {
    setting.start = start;
    setting.end = end;
    setting.duration = duration;
    await setting.save();
  } else {
    setting = new Setting({ start, end, duration });
    await setting.save();
  }

  // 🔥 DELETE ALL OLD BOOKINGS
  await Booking.deleteMany({});

  res.json({ message: "Timing saved & old bookings cleared" });
});

// GET TIMING
router.get("/", async (req, res) => {
  const setting = await Setting.findOne();
  res.json(setting);
});

module.exports = router;