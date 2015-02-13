var ArtistModel = require('../models/artistModel');
var q = require('q');
module.exports.save = function(artist){
	var dfd = q.defer();
	ArtistModel(artist).save(function(err, res){
		if(!err){
			dfd.resolve(res);
		} else {
			dfd.reject(err);
		}
	});
	return dfd.promise;
};