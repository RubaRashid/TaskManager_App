const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware"); // ya jo bhi actual path hai

const roleMiddleware = require("../middleware/roleMiddleware");

const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getAllUsers
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  getSingleUser
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  createUser
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateUser
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteUser
);

module.exports = router;