const Sequelize = require('sequelize');
const dbConfig = require('../config/db.js');
const Laugh = require('../model.js');

const connection = new Sequelize(dbConfig);

Laugh.init(connection);
Laugh.associate(connection.models);

module.exports = connection;