var keys = require("./keys.js");
var dotenv = require("dotenv").config();

var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

console.log(spotify);