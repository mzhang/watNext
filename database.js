const csvParser = require("./parseCSV.js")

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://matt:matt@cluster0.o24bv.mongodb.net/1b?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("1b").collection("tasks");
  collection.insertMany(csvParser('./1BDates.csv'), (err, res) => {
      if (res) console.log("nice.")
  })
  client.close();
});
