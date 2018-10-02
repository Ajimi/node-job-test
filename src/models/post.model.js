import Sequelize from 'sequelize';
import { getDB } from '../lib/db';

const Post = getDB().define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: Sequelize.TEXT
});

export default Post;