const User = require("../models/User");
const Project = require("../models/Project");
const Task = require("../models/Task");


// ==============================
// GET REPORTS DATA
// ==============================

const getReports = async (req, res) => {
  try {

    const {
      status,
      project,
      startDate,
      endDate,
    } = req.query;

    // ==========================
    // SUMMARY CARDS
    // ==========================

    const totalUsers =
      await User.countDocuments();

    const totalProjects =
      await Project.countDocuments();

    const totalTasks =
      await Task.countDocuments();

    const completedTasks =
      await Task.countDocuments({
        status: "Completed",
      });

    // ==========================
    // TASK FILTER
    // ==========================

    let taskFilter = {};

    if (
      status &&
      status !== "All"
    ) {
      taskFilter.status = status;
    }

    if (
      project &&
      project !== "All"
    ) {
      taskFilter.projectId = project;
    }

    if (startDate && endDate) {
      taskFilter.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    // ==========================
    // PROJECT STATUS
    // ==========================

    const projectStatus =
      await Project.aggregate([
        {
          $group: {
            _id: "$status",
            count: {
              $sum: 1,
            },
          },
        },
      ]);

    // ==========================
    // TASK STATUS
    // ==========================

    const taskStatus =
      await Task.aggregate([
        {
          $match: taskFilter,
        },
        {
          $group: {
            _id: "$status",
            count: {
              $sum: 1,
            },
          },
        },
      ]);

    // ==========================
    // RECENT TASKS
    // ==========================

    const recentTasks =
      await Task.find(taskFilter)
        .populate(
          "assignedTo",
          "email designation"
        )
        .populate(
          "projectId",
          "projectName"
        )
        .sort({
          createdAt: -1,
        })
        .limit(5);

    // ==========================
    // RECENT PROJECTS
    // ==========================

    const recentProjects =
      await Project.find()
        .sort({
          createdAt: -1,
        })
        .limit(5);

    // ==========================
    // RESPONSE
    // ==========================

    res.status(200).json({
      success: true,

      cards: {
        totalUsers,
        totalProjects,
        totalTasks,
        completedTasks,
      },

      taskStatus,

      projectStatus,

      recentTasks,

      recentProjects,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getReports,
};