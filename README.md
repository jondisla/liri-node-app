# Liri App with Nodejs

The Liri app will let you get your most recent tweets, search for songs and look up movies!

## Getting Started

Clone the repo into your system. Open the file and use the terminal to interact with Liri.  You will need your own API keys from Twitter, Spotify and OMDB.

These are the links for the docs in npm to use these services.
* [Twitter](https://www.npmjs.com/package/twitter)
* [Spotify](https://www.npmjs.com/package/node-spotify-api)
* [OMDB](https://www.npmjs.com/package/omdb)

### Prerequisites

Node npm must be installed on your machine. After installing npm...open the folder containing liri and run...
```
npm i require
npm i inquirer
npm i twitter
npm i node-spotify-api
npm i omdb
```
* Require the api's and inquirer (for each app)
```
var Twitter = require('twitter');
var inquirer = require('inquirer');
```
* This is an example of where to place the twitter api keys
```
var client = new Twitter({
//   consumer_key: 'HERE',
//   consumer_secret: 'HERE',
//   access_token_key: 'HERE',
//   access_token_secret: 'HERE'
// });
```

### Running the twitter app

Uncomment the twitter section in the liri.js file (important) and run the following code...
```
node liri.js my-tweets
```
![twitter app](https://user-images.githubusercontent.com/15232818/39079687-06cb0958-44ee-11e8-8610-667358d87cd6.JPG)

* This is a [guide](https://www.npmjs.com/package/twitter) for using the Twitter api with node


![spotify app](https://user-images.githubusercontent.com/15232818/39079689-0be593ae-44ee-11e8-8851-f002d340789f.JPG)


