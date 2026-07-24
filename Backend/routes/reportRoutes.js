const express = require("express");

const router = express.Router();

const {
  getReports,
} = require("../controllers/reportController");

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getReports
);

module.exports = router;