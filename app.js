const express = require("express");
const hbs = require('hbs');
const axios = require('axios');
var request = require('request');
var app = express();
var bodyParser = require("body-parser");
hbs.registerPartials(__dirname + '/views/partials');

const port = process.env.PORT || 8000;



app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'hbs');
var mongo = require('mongodb');

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/immuNATION";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("immuNATION");
//   dbo.createCollection("Users", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("immuNATION");
//   dbo.createCollection("Vaccinations", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

app.get('/', (req, res) => {
	res.render('home.hbs');
});

app.get('/home', (req, res) => {
	res.render('home.hbs');
});

app.get('/profile', (req, res) => {
	res.render('profile.hbs');
});

app.get('/vaccines', (req,res) => {
	res.render('vaccines.hbs');

});

app.get('/search', (req,res) => {
	res.render('search.hbs');

});


app.post('/search', (req, res) => {
	var zipcode = JSON.stringify(req.body.location);
	var encodedZip = encodeURIComponent(req.body.location);
	
	var url = `https://data.cityofnewyork.us/resource/inaf-e6a5.json?zip_code=${encodedZip}`;
	axios.get(url).then((response)=> {
		console.log(response.data[0].address);
		res.render('search.hbs', {
			stores: response.data

		})

	}).catch((e) => {
		if(e.code === 'ENOTFOUND') {

		}else{
			console.log(url);
			
		}
});
});

app.listen(process.env.PORT || 8000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});