require('dotenv').config();
let express = require('express');
let app = express();
let db = require('./db')

let pose = require('./controllers/posecontroller');
let user = require('./controllers/usercontroller');
let sequence = require('./controllers/sequencecontroller');

// sequelize.sync();
// sequelize.sync({force: true})
//above line will create and resets the table with the force: true
//comment out to update database
app.use(require("./middleware/headers"));

app.options('*', (req, res) => {
    res.json({
      status: 'OK'
    });
  });
app.use(express.json());

app.use('/user', user);
app.use('/pose', pose);
app.use('/sequence', sequence);

// app.listen(3000, () => {
//     console.log('App is running on port 3000')
// });
db.authenticate()
  .then(() => db.sync())
  // .then(() => db.sync({force: true}))
  .then(() =>
    app.listen(3000, () => {
      console.log(`[server]: App is listening on localhost:3000`);
    })
  )
  .catch((e) => {
    console.log("[server]: Server Crashed");
    console.log(e);
  });

