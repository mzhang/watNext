const csvParser = require('./parseCSV.js')
require('dotenv').config()

const MongoClient = require('mongodb').MongoClient
const uri = process.env.MONGO_URL
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(err => {
  const collection = client.db('1b').collection('tasks')
  collection.insertMany(csvParser('./1BDates.csv'), (err, res) => {
    if (res) console.log('nice.')
  })
  client.close()
})
