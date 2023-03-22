const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Must provide name of the task'],
      maxlengh: 30,
      trim: true,
    },
    desc: { type: String, maxlength: 150 },
    priority: { type: Number, default: 2 }, // 1 - maximum priority | 2 - normal | 3 - low
    status: { type: Number, default: 0 }, // 0 - todo | 1 - doing | 2 - done
    estimate_hours: { type: Number }, // tempo estimado para conclusão da tarefa.
    timeSpent: { type: Number, default: 0 }, // time spent on task in minutes
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },

  { timestamps: { createdAt: true } }
)

module.exports = mongoose.model('Task', TaskSchema)
