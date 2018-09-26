const Sequelize = require('sequelize');
const { getDB } = require('../lib/db');

const Post = getDB().define('post', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  author: Sequelize.STRING
});

Post.sync();

module.exports = Post;