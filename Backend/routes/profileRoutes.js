const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const User = require("../models/User");
const UserProfile = require("../models/UserProfile");

// GET Logged-in User Profile
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    const profile = await UserProfile.findOne({
      userId: user._id,
    });

    res.status(200).json({
      success: true,
      user,
      profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;