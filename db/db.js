const Sequelize = require('sequelize');
const path = require('path');
const db = new Sequelize('postgres://ystqjwcd:boNJiPMAo6srLr8sWOjRAkJquZ52mQFt@elmer.db.elephantsql.com:5432/ystqjwcd');

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Message = db.define('message', {
  message: {
    type: Sequelize.STRING
  }
});

// const User = db.define('user', {
//   name: {
//     type: Sequelize.STRING
//   },
//   message: {
//     type: Sequelize.STRING
//   }
// });

// const othertable = db.define('othertable', {
//   superhero: {
//     type: Sequelize.STRING
//   }
// });

// User.sync ({force: true}).then(() => {
//   return User.create({
//     name: 'Homer',
//     message: "do'h"
//   });
// });

// othertable.sync({force: true}).then(() => {
//   return othertable.create({
//     superhero: 'Spider-man'
//   });
// });

Message.sync({force: true}).then(() => {
  Message.create({
    message: 'The key, my friend, is to not be picky. Observe.'
  });
  Message.create({
    message: 'So let\'s do this thing!'
  });
  Message.create({
    message: 'A chef makes. A thief takes.'
  });
  Message.create({
    message: 'Keep your stations clear or I will kill you!'
  });
  // Message.create({
  //   message: 'You\'re in Paris now, baby. My town.'
  // });
  // Message.create({
  //   message: 'Anyone can cook, but only the fearless can be great.'
  // });
});

module.exports = {
  Message
}


// var mysql = require('mysql');
// var db = mysql.createConnection({
//   user: 'student',
//   password: 'student',
//   database: 'todo'
// });
// db.connect(function(err) {
//   if (err) {
//     throw err;
//   }
//   console.log('todo database connected');
// });

// module.exports = db
