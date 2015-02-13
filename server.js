var express = require('express');
var app = express();
var Mongoose = require('mongoose');
var MongoUri = "mongodb://localhost:27017/song-tag";
var bodyParser = require('body-parser');

app.use(bodyParser.json());

//Controllers

var ArtistCtrl = require('./lib/controllers/artistCtrl.js');

Mongoose.connect(MongoUri);
Mongoose.connection.once("open", function(){
	console.log("Connected to db " + MongoUri);
});


//routes go here

app.listen(8000);

app.post("/artist", ArtistCtrl.post);
