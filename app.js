const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");

const authRoutes = require("./routes/auth");
const profilesRoutes = require("./routes/profiles");
const feedRoutes = require("./routes/feed");

const port = process.env.PORT || 3001;
const app = express();

const mongoURI = require("./config/keys").mongoURI;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api/auth", authRoutes);
app.use("/api", profilesRoutes);
app.use("/api", feedRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message });
});

app.get("*", function(req, res) {
  res.redirect("/");
});

const server = app.listen(port);
require("./socket").init(server);
