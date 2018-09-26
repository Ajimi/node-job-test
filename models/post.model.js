const Sequelize = require('sequelize');
const { getDB } = require('../lib/db');
const User =  require('./user.model');

const Post = getDB().define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: Sequelize.TEXT  
});

Post.belongsTo(User);

Post.sync(); 

module.exports = Post;