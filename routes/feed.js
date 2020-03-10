const express = require("express");
const router = express.Router();
const feedController = require("../controllers/feed");
const { body } = require("express-validator");
const isAuth = require("../middleware/is-auth");

router.get("/loadPosts", feedController.loadPosts);

router.post("/createPost", isAuth, feedController.createPost);

router.post("/deletePost", isAuth, feedController.deletePost);

module.exports = router;
