import Sequelize from 'sequelize';
import { getDB } from '../lib/db';

const Comment = getDB().define('comment', {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export default Comment;