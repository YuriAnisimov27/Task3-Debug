const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    return next();
  } else {
    try {
      const sessionToken = req.headers.authorization.split(" ")[1];
      if (!sessionToken) {
        return res
          .status(401)
          .send({ auth: false, message: "No token provided." });
      }

      jwt.verify(
        sessionToken,
        "lets_play_sum_games_man",
        async (err, decoded) => {
          if (decoded) {
            try {
              req.user = await User.findOne({ where: { id: decoded.id } });
              return next();
            } catch (e) {
              res.status(401).send({ error: "not authorized" });
            }
          } else {
            return res.status(401).send({ error: "not authorized" });
          }
        }
      );
    } catch (e) {
      res.status(401).json({ message: "not authorized" });
    }
  }
};
