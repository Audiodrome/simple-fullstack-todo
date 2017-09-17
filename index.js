const express = require('express');
const app = express();
const db = require('./server/db');

console.log('what is db', db);


app.get('/', function (req, res) {
  db.User.findAll().then(users => {
    console.log('USERS', users);
  });
  db.othertable.findAll().then(others => {
    console.log('OTHERS', others);
  });
  res.send('hello world?');
});

app.listen(3000, function () {
  console.log('example app listening on port 3000');
});