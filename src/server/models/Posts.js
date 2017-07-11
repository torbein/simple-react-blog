var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostsSchema = new mongoose.Schema({
	title: {type: String, required: true},
	body: {type: String, required: true},
	author: {type: String, required: true}, //nickname
    created_at: {type: Date, require: true, default: Date.now()},
    modified_at: {type: Date, require: false, default: null}
});

module.exports = mongoose.model('Posts', PostsSchema);