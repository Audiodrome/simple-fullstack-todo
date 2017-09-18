const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/db');

const app = express();
console.log('what is db', db);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   db.User.findAll().then(users => {
//     console.log('USERS', users);
//   });
//   db.othertable.findAll().then(others => {
//     console.log('OTHERS', others);
//   });
//   res.send('hello world?');
// });

app.post('/addmessage', (req, res) => {
  console.log('Great SUCCESS', req.body);
  res.sendStatus(201);
});

app.get('/getmessages', (req, res) => {
  console.log('Great GET SUCCESS');
  res.sendStatus(200);
});

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(3000, () => {
  console.log('example app listening on port 3000');
});