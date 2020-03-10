const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    user: {
      type: String,
      ref: "users"
    },
    avatarUrl: String,
    username: String,
    platform: String,
    game: String,
    region: String,
    gameID: String,
    playersNeeded: Number,
    playersJoined: {
      type: Number,
      default: 1
    },
    description: String
  },
  { timestamps: true }
);

module.exports = Post = mongoose.model("posts", PostSchema);
