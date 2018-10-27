const Sequelize = require('sequelize');
const sequelize = new Sequelize('cows', 'cowuser', 'password', {
  port: 3000,
  dialect: 'postgres',
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.owners = require('../models/cows.js')(sequelize, Sequelize);



module.exports = db;