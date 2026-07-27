// const Task = require("../models/Task");

// // Create Task
// exports.createTask = async (req, res) => {
//   const task = await Task.create(req.body);
//   res.json(task);
// };

// // Get all tasks
// exports.getTasks = async (req, res) => {
//   const tasks = await Task.find();
//   res.json(tasks);
// };

// // Update task
// exports.updateTask = async (req, res) => {
//   const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(task);
// };

// // Delete task
// exports.deleteTask = async (req, res) => {
//   await Task.findByIdAndDelete(req.params.id);
//   res.json({ message: "Task deleted" });
// };







const Task = require("../models/Task");
const Notification = require("../models/Notification");

// ==============================
// GET ALL TASKS
// ==============================

const getAllTasks = async (
  req,
  res
) => {
  try {

    const tasks =
      await Task.find()

        .populate(
          "projectId",
          "projectName"
        )

        .populate(
          "assignedTo",
          "email designation role status"
        )

        .sort({
          createdAt: -1,
        });

    res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// GET SINGLE TASK
// ==============================

const getSingleTask = async (
  req,
  res
) => {
  try {

    const task =
      await Task.findById(
        req.params.id
      )

        .populate(
          "projectId",
          "projectName"
        )

        .populate(
          "assignedTo",
          "email designation role status"
        );

    if (!task) {
      return res.status(404).json({
        success: false,
        message:
          "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      task,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// CREATE TASK
// ==============================

const createTask = async (
  req,
  res
) => {
  try {

    const {
      taskName,
      description,
      projectId,
      assignedTo,
      status,
      priority,
      dueDate,
    } = req.body;

    const task =
      await Task.create({
        taskName,
        description,
        projectId,
        assignedTo,
        status,
        priority,
        dueDate,
      });

    await Notification.create({
      userId: task.assignedTo,
      title: "New Task Assigned",
      message: `You have been assigned "${task.taskName}"`,
      type: "Task",
    });

    res.status(201).json({
      success: true,
      message:
        "Task created successfully",
      task,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// UPDATE TASK
// ==============================

const updateTask = async (
  req,
  res
) => {
  try {

    const task =
      await Task.findById(
        req.params.id
      );

    if (!task) {
      return res.status(404).json({
        success: false,
        message:
          "Task not found",
      });
    }

    Object.assign(
      task,
      req.body
    );

    await task.save();
    await Notification.create({
      userId: task.assignedTo,
      title: "Task Updated",
      message: `"${task.taskName}" has been updated`,
      type: "Task",
    });
    res.status(200).json({
      success: true,
      message:
        "Task updated successfully",
      task,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// DELETE TASK
// ==============================

const deleteTask = async (
  req,
  res
) => {
  try {

    const task =
      await Task.findById(
        req.params.id
      );

    if (!task) {
      return res.status(404).json({
        success: false,
        message:
          "Task not found",
      });
    }

    await Task.deleteOne({
      _id: task._id,
    });

    res.status(200).json({
      success: true,
      message:
        "Task deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};