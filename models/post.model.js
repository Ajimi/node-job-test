const Sequelize = require('sequelize');
const { getDB } = require('../lib/db');

const Post = getDB().define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: Sequelize.TEXT  
}); 

module.exports = Post;  