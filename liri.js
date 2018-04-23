
// //TWITTER CODE//

var Twitter = require('twitter');
var inquirer = require('inquirer');
 
var client = new Twitter({
  consumer_key: 'siFtuviaS5Cdep8BWUaWOf4eM',
  consumer_secret: 'DjVOqTbHVuHhRJeGmqbKVel0f7xi6oWfCDnTLg1bdtlfdUnpjp',
  access_token_key: '984268479976165376-zoA62bomUU7UJ0Q21vZSTQCA9FHebBU',
  access_token_secret: 'zMSjGVEtBzQSj1nVjQD6uTlb6Hh6vNsuF1hj9OALbORFe'
});
 
var params = {screen_name: 'JonDoe89599487'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {

    console.log("--------------------TWEETS---------------");
    var  myTweets = [tweets[0].created_at + tweets[0].text, tweets[1].created_at + tweets[1].text, tweets[2].created_at + tweets[2].text, tweets[3].created_at + tweets[3].text, tweets[4].created_at + tweets[4].text, tweets[5].created_at + tweets[5].text, tweets[6].created_at + tweets[6].text];
    var userInput = "my-tweets";

    if (process.argv[2] === userInput){
    console.log(JSON.parse(JSON.stringify(myTweets)));
    console.log("------------------------------------------");
   }else{
     console.log('Invalid Command try "my-tweets"');
   }
});


 /////////////SPOTIFY/////////////////////////////////
 
// var Spotify = require('node-spotify-api');
// var spotifyCode = "spotify-this-song";
// var query = process.argv[3];



// var spotify = new Spotify({
//   id: "38358023b1b24f49866e9e95a98d7506",
//   secret: "a6ec9b7e81fc4f24956e7c934fd5bda8"
// });

// spotify
//   .request('https://api.spotify.com/v1/search?q=' + query + '&type=artist,track,album&limit=1')
//   .then(function(data) {
//     if(query === undefined){
//       return console.log('Invalid entry empty song name \n try "node liri.js spotify-this-song (songname)"');
      
//     }else if(process.argv[2] === spotifyCode && query)
//     //log the artist,song name, preview link and the album
//     console.log('Artist: ' + data.tracks.items[0].artists[0].name);
//     console.log('Song: ' + data.tracks.items[0].name);
//     console.log( data.tracks.items[0].preview_url);  
//     console.log('Album: ' + data.tracks.items[0].album.name);
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
// });


//OMDB Movie search

// var omdb = require("omdb");
// var movie = process.argv[3];
// var apiKey = "b7530e3f";
// var movieThis = "movie-this";
 
// omdb.search('saw', function(err, movies) {
//     if(err) {
//         return console.error(err);
//     }
 
//     if(movies.length < 1) {
//         return console.log('No movies were found!');
//     }
 
//     movies.forEach(function(movie) {
//         console.log('%s (%d)', movie.title, movie.year);
//     });
// });