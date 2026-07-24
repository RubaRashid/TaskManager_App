// import express from "express";
// import { loginUser } from "../controllers/authController";

// const router = express.Router();

// router.post("/login", loginUser);

// export default router;




const express = require("express");

const router = express.Router();

const {
  loginUser,
} = require("../controllers/authController");

router.post("/login", loginUser);

module.exports = router;