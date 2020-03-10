const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authController = require("../controllers/auth");
const isAuth = require("../middleware/is-auth");

router.get("/google", authController.google);

router.post(
  "/register",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email."),
    body("username")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Username length should be more than 5 characters."),
    body("password")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Password length should be more than 5 characters.")
  ],
  authController.register
);

router.post(
  "/login",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email.")
  ],
  authController.login
);

module.exports = router;
