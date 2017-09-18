const Sequelize = require('sequelize');

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
  return Message.create({
    message: 'Let\'s do this thing!'
  });
});

module.exports = {
  Message
}