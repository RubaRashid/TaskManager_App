const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const roleMiddleware = require(
  "../middleware/roleMiddleware"
);

const {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
} = require(
  "../controllers/taskController"
);


// GET ALL TASKS

router.get(
  "/",
  authMiddleware,
  getAllTasks
);


// GET SINGLE TASK

router.get(
  "/:id",
  authMiddleware,
  getSingleTask
);


// CREATE TASK

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  createTask
);


// UPDATE TASK

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateTask
);


// DELETE TASK

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteTask
);

module.exports = router;