var Mongoose = require('mongoose');
var Schema = Mongoose.Schema({
	name: {type: String, index: true, trquired: true},
	album: {type: String, index: true, trquired: true},
	bio: String,
	genre: {type: String},
	releasedOn: {type: Date},
	isExplicit: {type: Boolean},
	artist: {type: Schema.Types.ObjectId, ref: "Artist"}
});

module.exports = Mongoose.model("Song", Schema);