const express = require('express')
const app = express()
const port=3001

const csvParser = require('./parseCSV.js')

app.get('/', (req, res) => {
    res.send(csvParser('./1BDates.csv'))
}) 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
