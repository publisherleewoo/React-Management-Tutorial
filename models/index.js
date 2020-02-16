'use strict';



const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);
 

db.Customer = sequelize.define('customer', {
  id: {
    type: Sequelize.STRING(255),
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  image: {
    type: Sequelize.STRING(1024),
  },
  name: {
    type: Sequelize.STRING(64),
  },
  birthday: {
    type: Sequelize.STRING(64),
  },
  gender: {
    type: Sequelize.STRING(64),
  },
  job: {
    type: Sequelize.STRING(64),
  },

}, {
  timestamps: true,
  paranoid: true,
  underscore: true

})

db.sequelize = sequelize;
db.Sequelize = Sequelize;



 





module.exports = db;
