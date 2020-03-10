const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const profilesController = require("../controllers/profiles");
const isAuth = require("../middleware/is-auth");

router.get("/searchUsers", profilesController.searchUsers);

router.get("/profile/:username", profilesController.profile);

router.post("/saveProfile", isAuth, profilesController.saveProfile);

// router.get("/editProfile", isAuth, profilesController.editProfile);
// router.get("/uplayProfile/:username", profilesController.uplayProfile);

module.exports = router;
