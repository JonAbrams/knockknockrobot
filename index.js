require('dotenv').config();

const Twit = require('twit');

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
});

const stream = T.stream('statuses/filter', { track: '@knocknockrobot' });

stream.on('tweet', function (tweet) {
  if (!/who.s there/.test(tweet.text)) return;
  console.log(tweet);
});
