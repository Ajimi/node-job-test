import Sequelize from 'sequelize';
import config from '../config';

let sequelize = null;

export const getDB = () => {
  if (sequelize)
    return sequelize;

  sequelize = new Sequelize(
    config.server.database.name,
    config.server.database.username,
    config.server.database.password,
  {
    host: config.server.database.host,
    dialect: 'mysql',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

    logging: false
  });

  return sequelize;
};

export const verifyConnection = () => {
  if(!sequelize) getDB();


  return sequelize.authenticate()
    .then(() => console.log('DB connection has been established successfully.'))
    .catch(err => {
      console.error('Unable to connect to the database:', err);
      throw err;
    });
};