const express          = require('express');
const bodyParser       = require('body-parser');
const app              = express();
// const mongodb          = require('mongodb')
require('dotenv').config()
const port=process.env.PORT
const MongoClient = require('mongodb').MongoClient;
const uri=process.env.DBURL
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("mongo-demo").collection("users");
  // collection.insertMany([{"name":"Aslam","mail":"slamaslam466@gmail.com","code":"001"},{"name":"Aslam","mail":"slamaslam466@gmail.com","code":"002"}])
  // collection.updateOne({"code":"001"},{$set:{"work":"intern at guvi"}})
  // collection.updateMany({},{$set:{"status":"Active"}})
  //   collection.updateOne({"code":"002"},{$set:{"status":"Inactive"}})
  //   collection.deleteOne({"status":"Inactive"})
    // console.log(collection.find({"code":"001"}))

  // perform actions on the collection object
  // client.close();
});
app.get("/products", async(req,res) => {
  client.connect(err => {
    const collection = client.db("mongo-demo").collection("users");
    if(collection.findOne({ "name": "Aslam" }))
    console.log("True");
    else
    console.log("False");

  });
 res.status(200).json("hiiii")
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});