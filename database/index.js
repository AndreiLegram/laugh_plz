const Sequelize = require('sequelize');
const db = require('../config/db.js');

const conn = new Sequelize(db)

module.exports = conn;