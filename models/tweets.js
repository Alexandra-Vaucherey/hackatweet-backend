const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  firstname: String,
  username: String,
  tweet: String,
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;


