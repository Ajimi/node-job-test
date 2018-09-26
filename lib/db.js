const Sequelize = require('sequelize');
const config = require('../config');

let sequelize;

const connect = async (config) => {
  if (sequelize) {
    throw new Error('Trying to connect to database multiple times');
  }

  if (!config) {
    throw new Error('Database configuration is required');
  }

  sequelize = new Sequelize(
    config.name,
    config.username, 
    config.password, 
  {
    host: config.host,
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  try {
    await sequelize.authenticate();
    console.log('DB connection has been established successfully.');
  } catch(err) {
    console.error('Unable to connect to the database:', err);
    throw err; 
  }

}

const getDB = () => sequelize;

module.exports = {
  connect,
  getDB
};