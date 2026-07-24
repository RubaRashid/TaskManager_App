const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    fullName: {
      type: String,
      default: "",
    },

    phoneNumber: {
      type: String,
      default: "",
    },

    cnicNumber: {
      type: String,
      default: "",
    },

    profilePicture: {
      type: String,
      default: "",
    },

    dateOfBirth: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "UserProfile",
  userProfileSchema
);