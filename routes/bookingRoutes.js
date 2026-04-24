const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// BOOK SLOT
router.post("/book", async (req, res) => {
  const { userEmail, slot } = req.body;

  const exists = await Booking.findOne({ slot });
  if (exists) return res.json({ message: "Slot already booked" });

  const booking = new Booking({ userEmail, slot });
  await booking.save();

  res.json({ message: "Booking successful" });
});

// GET BOOKED SLOTS
router.get("/booked", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

// GET ALL BOOKINGS (ADMIN)
router.get("/all", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

// CANCEL BOOKING (DELETE RECORD)
router.post("/cancel", async (req, res) => {
  const { userEmail, slot } = req.body;

  await Booking.deleteOne({ userEmail, slot });

  res.json({ message: "Booking removed completely" });
});

module.exports = router;