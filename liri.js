// var dotenv = require("dotenv").config();
// var keys = require("./keys.js");


// // var spotify = new Spotify(keys.spotify);
// // var client = new Twitter(keys.twitter);

// console.log(dotenv);

//TWITTER CODE//

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
    var  myTweets = [tweets[0].text, + "\n" + tweets[1].text, tweets[2].text, tweets[3].text, tweets[4].text, tweets[5].text, tweets[6].text];
   
    console.log(JSON.parse(JSON.stringify(myTweets)));
    console.log("------------------------------------------");

});

 