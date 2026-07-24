const User = require("../models/User");
const UserProfile = require("../models/UserProfile");

const bcrypt = require("bcryptjs");


// ==============================
// GET ALL USERS
// ==============================

const getAllUsers = async (req, res) => {
  try {

    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    const usersWithProfiles =
      await Promise.all(
        users.map(async (user) => {

          const profile =
            await UserProfile.findOne({
              userId: user._id,
            });

          return {
            ...user.toObject(),
            profile,
          };
        })
      );

    res.status(200).json({
      success: true,
      count: usersWithProfiles.length,
      users: usersWithProfiles,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// GET SINGLE USER
// ==============================

const getSingleUser = async (
  req,
  res
) => {
  try {

    const user = await User.findById(
      req.params.id
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const profile =
      await UserProfile.findOne({
        userId: user._id,
      });

    res.status(200).json({
      success: true,
      user,
      profile,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// CREATE USER
// ==============================

const createUser = async (
  req,
  res
) => {
  try {

    const {
      email,
      password,
      role,
      designation,
      status,
      
      fullName,
      phoneNumber,
      cnicNumber,
      profilePicture,
      dateOfBirth,
    } = req.body;

    const existingUser =
      await User.findOne({
        email,
      });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          "Email already exists",
      });
    }

    const salt =
      await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(
        password,
        salt
      );

    const user =
      await User.create({
        email,
        password:
          hashedPassword,

        role:
          role || "user",

        designation,
      });

    const profile =
      await UserProfile.create({
        userId: user._id,

        fullName:
          fullName || "",

        phoneNumber:
          phoneNumber || "",

        cnicNumber:
          cnicNumber || "",

        profilePicture:
          profilePicture || "",

        dateOfBirth:
          dateOfBirth || null,
      });

    res.status(201).json({
      success: true,
      message:
        "User created successfully",

      user,
      profile,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// UPDATE USER
// ==============================

const updateUser = async (
  req,
  res
) => {
  try {

    const {
      email,  
      designation,
      role,
      status,
      fullName,
      phoneNumber,
      cnicNumber,
      profilePicture,
      dateOfBirth,
    } = req.body;

    const user =
      await User.findById(
        req.params.id
      );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    user.email = email || user.email;
    user.designation =
      designation ||
      user.designation;

    user.role =
      role || user.role;
    user.status =
        status || user.status;
    await user.save();

    const profile =
      await UserProfile.findOneAndUpdate(
        {
          userId: user._id,
        },
        {
          fullName,
          phoneNumber,
          cnicNumber,
          profilePicture,
          dateOfBirth,
        },
        {
          new: true,
        }
      );

    res.status(200).json({
      success: true,
      message:
        "User updated successfully",

      user,
      profile,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// DELETE USER
// ==============================

const deleteUser = async (
  req,
  res
) => {
  try {

    const user =
      await User.findById(
        req.params.id
      );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await User.deleteOne({
      _id: user._id,
    });

    await UserProfile.deleteOne({
      userId: user._id,
    });

    res.status(200).json({
      success: true,
      message:
        "User deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};