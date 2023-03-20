const express = require('express');

const router = express.Router();

const todos_controllers = require('../controllers/todos_controllers')

router.route('/getAll').get(todos_controllers.getAllTodos)

router.route('/create').post(todos_controllers.createTodo)

module.exports = router;