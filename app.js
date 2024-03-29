const express = require('express')
require('dotenv').config()
const app = express()
const routes = require('./routes/tasks')
const connectDB = require('./db/connect')
const PORT = process.env.PORT || 5001
const cors = require('cors')
app.use(cors())
app.use(express.json())

// add welcome page

app.use('/api/v1/tasks', routes)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log('Connected to database...')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
