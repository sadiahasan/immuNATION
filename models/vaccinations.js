var mongoose = require('mongoose');

var Vaccinations = mongoose.model('Vaccinations', {
	name: {
		type: String
	},
	age: {
		type: Number
	}
});

module.exports = {Vaccinations};