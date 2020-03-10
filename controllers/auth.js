const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const throwErr = require("../util/throwErr");

exports.google = (req, res, next) => {
  passport.authenticate("google-token", (err, user, info) => {
    try {
      if (info && info instanceof Error) {
        throw info;
      }
      const { email } = user;
      const token = jwt.sign(
        { email },
        "3AF8078575F2572FA06FD33ED59BC68C58EE85E0D3DB059AE3539E6B7DAB6B42",
        { expiresIn: "1h" }
      );
      res.header("Authorization", token);
      res.status(200).json({ message: "Success!", user });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
};

exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed.");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;
    if (password !== passwordConfirm) {
      throwErr(422, "Passwords do not match.");
    }
    const userDocEmail = await User.findOne({ email });
    if (userDocEmail) {
      throwErr(422, "There already is an account with such e-mail.");
    }
    const userDocUsername = await User.findOne({
      username: username.toLowerCase()
    });
    if (userDocUsername) {
      throwErr(422, "Username taken.");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      username: username.toLowerCase(),
      password: hashedPassword,
      online: true
    });
    const savedUser = await user.save();
    const token = jwt.sign(
      { email },
      "3AF8078575F2572FA06FD33ED59BC68C58EE85E0D3DB059AE3539E6B7DAB6B42",
      { expiresIn: "1h" }
    );
    res.header("Authorization", token);
    res.status(201).json({ message: "Account created!", user: savedUser });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed.");
      error.statusCode = 422;
      throw error;
    }
    const password = req.body.password;
    const email = req.body.email;
    const loadedUser = await User.findOne({ email });
    if (!loadedUser) {
      throwErr(401, "A user with this email could not be found.");
    }
    if (loadedUser.googleId) {
      throwErr(401, "Sign in using the google button.");
    }
    const isEqual = await bcrypt.compare(password, loadedUser.password);
    if (!isEqual) {
      throwErr(401, "Wrong password!");
    }
    const token = jwt.sign(
      { email: loadedUser.email },
      "3AF8078575F2572FA06FD33ED59BC68C58EE85E0D3DB059AE3539E6B7DAB6B42",
      { expiresIn: "1h" }
    );
    loadedUser.online = true;
    const savedUser = await loadedUser.save();
    res.header("Authorization", token);
    res.status(200).json({
      user: savedUser
    });
  } catch (error) {
    next(error);
  }
};
