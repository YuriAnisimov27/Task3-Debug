const express = require('express');
const bodyParser = require('body-parser')
// const db = require('./db');
// const user = require('./controllers/usercontroller');
// const game = require('./controllers/gamecontroller');
// const validateSession = require('./middleware/validate-session')

const port = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(validateSession);

// db.sync();
// app.use('/api/auth', user);
// app.use('/api/game', game);

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
})
