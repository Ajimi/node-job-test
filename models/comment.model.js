const Sequelize = require('sequelize');
const { getDB } = require('../lib/db');

const Comment = getDB().define('comment', {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
}); 
 
module.exports = Comment; 