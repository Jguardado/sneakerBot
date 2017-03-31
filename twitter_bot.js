var TwitterPackage = require('twitter');
var {
  CONSUMER_KEY,
  CONSUMER_SECERET_KEY,
  ACCESS_TOKEN,
  ACCESS_SECRET_TOKEN
} = require('./env');

var secret = {
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECERET_KEY,
  access_token_key: ACCESS_TOKEN,
  access_token_secret: ACCESS_SECRET_TOKEN
}

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '#Sneaker_bot'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log("first tweet", tweet.text);

    var comment = 'I love getting jordans as soon as they release!'
    Twitter.post('statuses/update', {status: comment},  function(error, tweet, response){
      console.log("is the post func running");
      if(error){
        console.log(error);
      }
      console.log(tweet);  // Tweet body.
      console.log(response);  // Raw response object.
    });
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
