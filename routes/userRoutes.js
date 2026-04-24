const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  const { email, password, role } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.json({ message: "User already exists" });

  const user = new User({ email, password, role });
  await user.save();

  res.json({ message: "User registered successfully" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) return res.json({ message: "Invalid credentials" });

  res.json({ message: "Login successful", user });
});

module.exports = router;