const express = require('express');
const app = express();
const cors = require('cors');
const todos_route = require('./routes/todos_routes')
app.use(express.json());
app.use(cors());

app.use('/api/v1/todos',todos_route);

 

module.exports = app;