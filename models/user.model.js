const Sequelize = require('sequelize');
const { getDB } = require('../lib/db');

const User = getDB().define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// // seed users
User.findById(1).then(user => {
  if (!user) {
    User.create({
      name: 'amenallah'
    });
  }
})

module.exports = User;