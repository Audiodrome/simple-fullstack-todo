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
  db.Message.findAll().then(messages => {
    // console.log('All messages ', messages[0].dataValues.message);
    const msgs = [];
    for (let i = 0; i < messages.length; i++) {
      msgs.push(messages[i].dataValues.message);
    }
    console.log('what are msgs. ', msgs);
    res.status(200).send(msgs);
  })
});

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(3000, () => {
  console.log('example app listening on port 3000');
});