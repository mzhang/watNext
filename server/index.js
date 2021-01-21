const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const path = require('path');
const port = 4000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
}) 

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact.html'));
}) 

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://matt:matt@cluster0.o24bv.mongodb.net/1b?retryWrites=true&w=majority";

app.get('/1b', async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    await client.connect()
    const collection = client.db("1b").collection("tasks");
    const data = await collection.find({}).toArray()
    res.send(data)
    client.close()
}) 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
