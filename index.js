const express = require('express')
const app = express()
var path = require('path');

const csvParser = require('./parseCSV.js')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
}) 

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact.html'));
}) 

app.get('/1b', (req, res) => {
    res.send(csvParser('./1BDates.csv'))
}) 

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`)
  })
