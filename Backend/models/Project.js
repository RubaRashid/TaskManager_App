const mongoose = require("mongoose");

const projectSchema =
  new mongoose.Schema(
    {
      projectName: {
        type: String,
        required: true,
      },

      description: {
        type: String,
      },

      status: {
        type: String,
        enum: [
          "Pending",
          "In Progress",
          "Completed",
        ],
        default: "Pending",
      },

      startDate: {
        type: Date,
      },

      endDate: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Project",
    projectSchema
  );