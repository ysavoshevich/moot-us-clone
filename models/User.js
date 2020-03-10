const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: String,
  username: String,
  googleId: String,
  online: Boolean,
  profile: {
    date: {
      type: Date,
      default: Date.now
    },
    bio: {
      type: String,
      default: ""
    },
    avatarUrl: {
      type: String,
      default:
        "https://topgear.com.my/sites/default/files/default_images/avatar-default.png"
    },
    gameAccounts: {
      siege: {
        type: String,
        default: ""
      },
      pubg: {
        type: String,
        default: ""
      },
      fortnite: {
        type: String,
        default: ""
      },
      apex: {
        type: String,
        default: ""
      }
    },
    streamingAccounts: {
      youtube: { type: String, default: "" },
      twitch: { type: String, default: "" },
      mixer: { type: String, default: "" }
    }
  }
});

module.exports = User = mongoose.model("users", UserSchema);
