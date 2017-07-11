var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectsSchema = new mongoose.Schema({
	title: {type: String, required: true},
	body: {type: String, required: true},
	link: {type: String, required: true}
});

module.exports = mongoose.model('Projects', ProjectsSchema);