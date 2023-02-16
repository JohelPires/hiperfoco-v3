const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Must provide name of the task'],
    maxlengh: 30,
    trim: true,
  },
  desc: { type: String, maxlength: 150 },
  status: { type: Number, default: 0 }, // 0 - todo | 1 - doing | 2 - done
  timeSpent: { type: Number, default: 0 }, // time spent on task in minutes
})

module.exports = mongoose.model('Task', TaskSchema)
