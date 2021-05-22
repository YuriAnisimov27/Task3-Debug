const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const userController = require("./controllers/usercontroller");
const gameController = require("./controllers/gamecontroller");
const validateSession = require("./middleware/validate-session");

const port = process.env.PORT || 4000;
const app = express();
db.sync();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(validateSession);

app.use("/api/auth", userController);
app.use("/api/game", gameController);

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
