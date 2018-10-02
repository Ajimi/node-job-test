import Sequelize from 'sequelize';
import { getDB } from '../lib/db';

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

export default User;