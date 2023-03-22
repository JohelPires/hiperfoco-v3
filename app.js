const express = require('express')
require('dotenv').config()
const app = express()

const connectDB = require('./db/connect')
const PORT = process.env.PORT || 5001
const cors = require('cors')
app.use(cors())
app.use(express.json())

// authentication middleware
// const authenticateUser = require('./middleware/authentication')

// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// ====== Routes ======
// add welcome page
const routes = require('./routes/tasks')
const authRouter = require('./routes/auth')
app.use('/auth', authRouter)
app.use('/api/v1/tasks', routes)

// ====== start server ======
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
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
