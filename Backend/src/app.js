const express = require('express')
const cors = require('cors')
const db = require('../src/data/dbConfig')
const app = express()

db();
app.use(express.json())
app.use(cors())

app.use('/', require('./routes/index'))
//app.use('/', require('./routes/characterRoutes'))

module.exports  = app