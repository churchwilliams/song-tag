var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	_id: {type: String, required: true, unique: true},
});

module.exports = Mongoose.model('Tag', Schema);