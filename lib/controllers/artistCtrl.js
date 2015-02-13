var ArtistService = require('./../services/ArtistService.js');

module.exports.post = function(req, res){
	ArtistService.save(req.body)
		.then(function(response){
			res.status(200).json(response);
		}, function(err){
			res.status(400).json(err);
		});

};