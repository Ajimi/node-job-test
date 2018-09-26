const Sequelize = require('sequelize');
const config = require('../config');

let sequelize = null;

const getDB = () => {
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
}

const verifyConnection = async () => {
  if(!sequelize) getDB();

  try {
    await sequelize.authenticate();
    console.log('DB connection has been established successfully.');
  } catch(err) {
    console.error('Unable to connect to the database:', err);
    throw err; 
  }
}

module.exports = {
  getDB,
  verifyConnection
};