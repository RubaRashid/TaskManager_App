const User = require("../models/User");
const Project = require("../models/Project");
const Task = require("../models/Task");


// =======================================
// ADMIN DASHBOARD
// =======================================

const getDashboardData = async (
  req,
  res
) => {
  try {

    // ===========================
    // CARDS
    // ===========================

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

    const pendingTasks =
      await Task.countDocuments({
        status: "Pending",
      });

    const inProgressTasks =
      await Task.countDocuments({
        status: "In Progress",
      });


    // ===========================
    // TASK STATUS CHART
    // ===========================

    const taskStatus = [

      {
        status: "Pending",
        count: pendingTasks,
      },

      {
        status: "In Progress",
        count: inProgressTasks,
      },

      {
        status: "Completed",
        count: completedTasks,
      },

    ];


    // ===========================
    // PROJECT STATUS CHART
    // ===========================

    const completedProjects =
      await Project.countDocuments({
        status: "Completed",
      });

    const pendingProjects =
      await Project.countDocuments({
        status: "Pending",
      });

    const runningProjects =
      await Project.countDocuments({
        status: "In Progress",
      });

    const projectStatus = [

      {
        status: "Pending",
        count: pendingProjects,
      },

      {
        status: "In Progress",
        count: runningProjects,
      },

      {
        status: "Completed",
        count: completedProjects,
      },

    ];


    // ===========================
    // RECENT TASKS
    // ===========================

    const recentTasks =
      await Task.find()

        .populate(
          "projectId",
          "projectName"
        )

        .populate(
          "assignedTo",
          "email designation"
        )

        .sort({
          createdAt: -1,
        })

        .limit(4);


    // ===========================
    // RECENT PROJECTS
    // ===========================

    const recentProjects =
      await Project.find()

        .sort({
          createdAt: -1,
        })

        .limit(4);


    // ===========================
    // RESPONSE
    // ===========================

    res.status(200).json({

      success: true,

      cards: {

        totalUsers,

        totalProjects,

        totalTasks,

        completedTasks,

        pendingTasks,

        inProgressTasks,

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
  getDashboardData,
};