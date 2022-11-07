const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const listRouter = require('./src/routes/listRouter')
const userRouter = require('./src/routes/userRouter')

const app = express()
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/list', listRouter)
app.use('/user', userRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Error! Wrong direct' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app;