const dbConfig = require("../config/dbconfig.js");
const Sequelize = require("sequelize");
// const db = require("../models/subjects.model");

//importing modules
// const {Sequelize, DataTypes} = require('sequelize')

//for environment file
require('dotenv').config();

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // You may need to adjust this option based on your SSL certificate configuration
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user_model")(sequelize, Sequelize);

// db.users = require("./users.model.js")(sequelize, Sequelize);


module.exports = db;