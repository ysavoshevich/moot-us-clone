var passport = require("passport");
var GoogleTokenStrategy = require("passport-google-token").Strategy;
const User = require("../models/User");

module.exports = passport =>
  passport.use(
    new GoogleTokenStrategy(
      {
        clientID:
          "909565964000-thqg3l7e6e7gmr792lfm94oe3l3hj6a7.apps.googleusercontent.com",
        clientSecret: "luTVNjzivuNjXlba-RJxeJjX"
      },
      async function(accessToken, refreshToken, profile, done) {
        try {
          const { id: googleId, email, picture } = profile._json;
          const loadedUser = await User.findOne({ googleId });
          if (loadedUser) {
            done(null, loadedUser);
          } else {
            const savedUser = await new User({
              username: `gamer${googleId.substring(0, 6)}`,
              googleId,
              email,
              profile: { avatarUrl: picture },
              online: true
            }).save();
            done(null, savedUser);
          }
        } catch (error) {
          done(null, null, error);
        }
      }
    )
  );
