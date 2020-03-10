const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const io = require("../socket");
const ObjectId = require("mongodb").ObjectID;
const User = require("../models/User");
const Post = require("../models/Post");
const throwErr = require("../util/throwErr");

exports.loadPosts = async (req, res, next) => {
  try {
    const { page: currentPage, game, region, platform } = req.query;
    const itemsPerPage = 4;
    const query = {};
    if (game) {
      query.game = game;
    }
    if (region) {
      query.region = region;
    }
    if (platform) {
      query.platform = platform;
    }
    let posts = await Post.find(query)
      .skip((currentPage - 1) * itemsPerPage)
      .limit(itemsPerPage)
      .sort({ createdAt: -1 });
    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const {
      username,
      avatarUrl,
      platform,
      game,
      gameID,
      playersNeeded,
      description,
      region
    } = req.body;

    for (let key in req.body) {
      if (req.body[key].length === 0) {
        throwErr(422, "Fields should not be empty");
      }
      if (key === "gameID" && req.body[key].length > 20) {
        throwErr(422, "Game ID is too long.");
      }
      if (key === "description" && req.body[key].length > 200) {
        throwErr(422, "Description should not be more than 200 characters.");
      }
      if (key === "playersNeeded" && req.body[key].length > 100) {
        throwErr(422, "Maximum number of players is 100");
      }
    }
    const email = req.email;
    const post = new Post({
      user: email,
      avatarUrl,
      username,
      platform,
      game,
      gameID,
      playersNeeded,
      description,
      region
    });
    const savedPost = await post.save();
    io.getIO().emit("posts", {
      action: "create",
      post: {
        ...savedPost._doc
      }
    });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { _id, username } = req.body;
    const email = req.email;
    const userDoc = await User.findOne({ email });
    const { username: foundUsername } = userDoc;
    if (!userDoc) {
      throwErr(422, "No such user.");
    }
    if (username !== foundUsername) {
      throwErr(422, "");
    }
    await Post.findOneAndDelete({ _id });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
