const jwt = require("jsonwebtoken");
const throwErr = require("../util/throwErr");

const JWT_STRING = require("../config/keys").jwtString;

module.exports = (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      throwErr(401, "Not authenticated");
    }
    const token = authHeader.split(" ")[1];
    let decodedToken = jwt.verify(token, JWT_STRING);
    if (!decodedToken) {
      throwErr(401, "Not authenticated");
    }
    req.email = decodedToken.email;
    next();
  } catch (error) {
    next(error);
  }
};
