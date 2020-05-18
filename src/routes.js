const express = require('express');
const controller = require('./controller');

const routes = express.Router();

routes.get('/index', controller.selectAll);
routes.post('/add', controller.insertAll);

module.exports = routes;