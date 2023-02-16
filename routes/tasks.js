const express = require('express')
const routes = express.Router()
const {
  getAllTasks,
  getOneTask,
  createTasks,
  deleteTask,
  updateTasks,
} = require('../controllers/tasks')

// get all tasks

// get one task

// create new task

// delete task

// update task

routes.route('/').get(getAllTasks).post(createTasks)
routes.route('/:id').get(getOneTask).delete(deleteTask).patch(updateTasks)

module.exports = routes
