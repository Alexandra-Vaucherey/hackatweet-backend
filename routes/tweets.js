var express = require('express');
var router = express.Router();
require('../models/connection');


const Tweet = require('../models/tweets');

//New tweet
router.post('/', (req, res) => {
  
    const newTweet = new Tweet({
        firstname: req.body.firstname,
        username: req.body.username,
        tweet: req.body.tweet,
    })

    newTweet.save().then(newDoc => {
        res.json({result: true, tweet: newDoc.tweet})
    })
})


//Show all the tweets
router.get('/', (req, res) => {
    Tweet.find()
    .then(data => {
      res.json({tweets: data})
    })
      });


module.exports = router;