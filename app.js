const express = require("express");
const hbs = require('hbs');
const axios = require('axios');
var request = require('request');
var app = express();
var bodyParser = require("body-parser");
hbs.registerPartials(__dirname + '/views/partials');

const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
	res.render('home.hbs');
});

app.get('/vaccines', (req,res) => {
	console.log(res);
	res.render('vaccines.hbs');
});

app.post('/pharmacies', (req, res) => {
	var zipcode = JSON.stringify(req.body.location);
	var encodedZip = encodeURIComponent(req.body.location);
	
	var url = `https://data.cityofnewyork.us/resource/inaf-e6a5.json?zip_code=${encodedZip}`;
	axios.get(url).then((response)=> {
		console.log(response.data);

	}).catch((e) => {
		if(e.code === 'ENOTFOUND') {

		}else{
			console.log(url);
			
		}
});
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
	}); 