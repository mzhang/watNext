const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')

const loginRoutes = require('./routes/login')
const taskActions = require('./routes/taskActions')


const port = 4000

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use('/user', loginRoutes)
app.use('/task', taskActions)

mongoose.connect(process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => {console.log(err)})

const db = mongoose.connection
db.once('open', () => console.log('Successfully connected to DB.'))

app.listen(port, () => console.log(`${new Date().toLocaleString('en-US')}: App is listening at ${port}`))