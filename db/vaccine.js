var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("immuNATION");
  
  var myobj = { 
  	name: "Influenza", 
  	age: 0
  };

  var myobj1 = { 
    name: "Pneumonia", 
    age: 65
  };

  var myobj2 = { 
    name: "Shingrix", 
    age: 50
  };

  var myobj3 = { 
    name: "TDAP", 
    age: 0
  };

  dbo.collection("Vaccinations").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  dbo.collection("Vaccinations").insertOne(myobj1, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  dbo.collection("Vaccinations").insertOne(myobj2, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  dbo.collection("Vaccinations").insertOne(myobj3, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
});