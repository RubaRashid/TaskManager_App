const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const roleMiddleware = require(
  "../middleware/roleMiddleware"
);

const {
  getAllProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject,
} = require(
  "../controllers/projectController"
);


// GET ALL PROJECTS

router.get(
  "/",
  authMiddleware,
  getAllProjects
);


// GET SINGLE PROJECT

router.get(
  "/:id",
  authMiddleware,
  getSingleProject
);


// CREATE PROJECT

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  createProject
);


// UPDATE PROJECT

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateProject
);


// DELETE PROJECT

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteProject
);

module.exports = router;