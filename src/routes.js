const express = require('express');
const controller = require('./controller');

const routes = express.Router();

routes.get('/index', controller.select);
routes.post('/add', controller.insert);
routes.delete('/laughs/:id/delete', controller.delete);

module.exports = routes;