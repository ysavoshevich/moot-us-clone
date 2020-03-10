const User = require("../models/User");
const throwErr = require("../util/throwErr");

exports.searchUsers = async (req, res, next) => {
  try {
    const searchValue = req.query.searchValue;
    const username = req.query.username;
    var searchValueRegex = new RegExp(searchValue, "i");
    let usersArr = await User.find({
      username: { $regex: searchValueRegex, $ne: username }
    }).limit(5);
    usersArr = usersArr.map(user => user.username);
    res.status(200).json({ usersArr });
  } catch (error) {
    next(error);
  }
};

exports.profile = async (req, res, next) => {
  try {
    const username = req.params.username;
    const userDoc = await User.findOne({ username });
    if (!userDoc) {
      const error = Error("No such user.");
      error.statusCode = 422;
      error.data = [{ msg: "No such user." }];
      throw error;
    }
    const { profile } = userDoc;
    res.status(200).json({
      username,
      profile
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.data = [
        { msg: "Something went wrong. Sorry for the inconvenience" }
      ];
    }
    next(error);
  }
};

exports.saveProfile = async (req, res, next) => {
  try {
    const email = req.email;
    const {
      username,
      bio,
      youtube,
      twitch,
      mixer,
      siege,
      apex,
      fortnite,
      pubg,
      avatarUrl
    } = req.body;
    if (bio.length > 500) {
      throwErr(422, `Bio's length should not be more than 500 characters.`);
    }
    if (
      (youtube.length ||
        twitch.length ||
        mixer.length ||
        siege.length ||
        apex.length ||
        fortnite.length ||
        pubg.length) > 50
    ) {
      throwErr(422, "Input's length should not be more than 50 characters.");
    }
    if (username.length > 12 || username.length < 5) {
      throwErr(
        422,
        "Username length should not be more than 12 characters or less than 5."
      );
    }
    const usernameRegEx = /^\w+$/;
    if (!usernameRegEx.test(username)) {
      throwErr(
        422,
        "Username should only contain letters, numbers and undescores."
      );
    }

    let user = await User.findOne({ username });
    if (user && user.username !== username) {
      throwErr(422, "Username taken");
    }

    user = await User.findOne({ email });
    user.profile.bio = bio;
    user.profile.streamingAccounts.twitch = twitch;
    user.profile.streamingAccounts.mixer = mixer;
    user.profile.streamingAccounts.youtube = youtube;
    user.profile.gameAccounts.siege = siege;
    user.profile.gameAccounts.apex = apex;
    user.profile.gameAccounts.pubg = pubg;
    user.profile.gameAccounts.fortnite = fortnite;
    user.profile.avatarUrl = avatarUrl;
    user.username = username;

    await user.save();

    res.status(200).json({
      user
    });
  } catch (error) {
    next(error);
  }
};
