const express = require('express');

const path = require('path');
const db = require('./db/db');


const app = express();
console.log('what is db', db);

// app.get('/', (req, res) => {
//   db.User.findAll().then(users => {
//     console.log('USERS', users);
//   });
//   db.othertable.findAll().then(others => {
//     console.log('OTHERS', others);
//   });
//   res.send('hello world?');
// });

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(3000, () => {
  console.log('example app listening on port 3000');
});