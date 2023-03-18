const express = require('express');
const app = express();
const todos_route = require('./routes/todos_routes')

app.use('/api/v1/todos',todos_route);

 

module.exports = app;