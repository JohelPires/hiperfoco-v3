const Task = require('../models/task')

// get all tasks

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user.userId }).sort(
      'createdAt'
    )
    // const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json(error)
  }
}

// get one task

const getOneTask = async (req, res) => {
  try {
    const user = req.user.userId
    const task = await Task.findOne({ _id: req.params.id, createdBy: user })
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json(error)
  }
  //   res.json({ msg: `task with id: ${req.params.id}` })
}

// create new task

const createTasks = async (req, res) => {
  try {
    req.body.createdBy = req.user.userId
    const task = await Task.create(req.body)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ error })
  }
}

// delete task

const deleteTask = async (req, res) => {
  try {
    const user = req.user.userId
    const task = await Task.deleteOne({ _id: req.params.id, createdBy: user })
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json(error)
  }
}

// update task

const updateTasks = async (req, res) => {
  try {
    const user = req.user.userId
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, createdBy: user },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  getAllTasks,
  getOneTask,
  createTasks,
  deleteTask,
  updateTasks,
}
