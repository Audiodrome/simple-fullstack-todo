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
  // db.Message.update({
  //   message: JSON.stringify(req.body.text)
  // }, { where: { message: { $ne: null }}})
  // .then(data => {
  //   console.log('Am I Batman?', data);
  //   res.status(201).send(data);
  // });
  db.Message.create({
    message: req.body.text
  })
  .then(result => {
    console.log('Message inserted ', typeof result.message);
    res.set('Content-Type', 'application/json');
    res.status(201).send(result.message);
  });
});

app.get('/getmessages', (req, res) => {
  console.log('Great GET SUCCESS');
  db.Message.findAll().then(messages => {
    // console.log('All messages ', messages[0].dataValues.message);
    const msgs = [];
    for (let i = messages.length - 1; i >= 0; i--) {
      msgs.push(messages[i].dataValues.message);
    }
    console.log('what are msgs. ', msgs);
    res.status(200).send(msgs);
  })
});

app.delete('/removemessage', (req, res) => {
  console.log('delete request: ', req.body);
  db.Message.destroy({
    where: {
      message: req.body.text
    }
  })
  .then(() => {
    res.sendStatus(204);
  });
});

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(3000, () => {
  console.log('example app listening on port 3000');
});