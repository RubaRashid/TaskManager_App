const Project = require("../models/Project");
const Notification = require("../models/Notification");
const User = require("../models/User");


// ==============================
// GET ALL PROJECTS
// ==============================

const getAllProjects = async (
  req,
  res
) => {
  try {

    const projects =
      await Project.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// GET SINGLE PROJECT
// ==============================

const getSingleProject = async (
  req,
  res
) => {
  try {

    const project =
      await Project.findById(
        req.params.id
      );

    if (!project) {
      return res.status(404).json({
        success: false,
        message:
          "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      project,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// CREATE PROJECT
// ==============================

const createProject = async (
  req,
  res
) => {
  try {

    const {
      projectName,
      description,
      status,
      startDate,
      endDate,
    } = req.body;

    const project =
      await Project.create({
        projectName,
        description,
        status,
        startDate,
        endDate,
      });
      const admins = await User.find({
  role: "admin",
});

for (const admin of admins) {
  await Notification.create({
    userId: admin._id,
    title: "Project Created",
    message: `${project.projectName} has been created`,
    type: "Project",
  });
}
    res.status(201).json({
      success: true,
      message:
        "Project created successfully",
      project,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// UPDATE PROJECT
// ==============================

const updateProject = async (
  req,
  res
) => {
  try {

    const project =
      await Project.findById(
        req.params.id
      );

    if (!project) {
      return res.status(404).json({
        success: false,
        message:
          "Project not found",
      });
    }

    Object.assign(
      project,
      req.body
    );

    await project.save();
    await Notification.create({
  userId: req.user.id,
  title: "Project Updated",
  message: `${project.projectName} has been updated`,
  type: "Project",
});
    res.status(200).json({
      success: true,
      message:
        "Project updated successfully",
      project,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// DELETE PROJECT
// ==============================

const deleteProject = async (
  req,
  res
) => {
  try {

    const project =
      await Project.findById(
        req.params.id
      );

    if (!project) {
      return res.status(404).json({
        success: false,
        message:
          "Project not found",
      });
    }

    await Project.deleteOne({
      _id: project._id,
    });

    res.status(200).json({
      success: true,
      message:
        "Project deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


module.exports = {
  getAllProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject,
};