const express = require("express");
const hbs = require('hbs');
const axios = require('axios');
var request = require('request');
var app = express();
var bodyParser = require("body-parser");
//hbs.registerPartials(__dirname + '/views/partials');

const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
	res.render('home.hbs');
});

app.post('/hello', (req,res) => {
	console.log(res);
	res.render('hello.hbs', {
		response: res
	});
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
	}); 