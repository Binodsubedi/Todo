const express = require('express');

const router = express.Router();

const getTodos = require('../controllers/todos_controllers')

router.route('/getAll').get(getTodos.getAllTodos)


module.exports = router;