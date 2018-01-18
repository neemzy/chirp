const express = require('express');
const app = express();
app.use(express.static('public'));

const Twitter = require('twitter');
const credentials = require('./credentials');
const client = new Twitter(credentials);

function getTweets() {
  return new Promise((resolve, reject) => {
    client.get(
      'statuses/home_timeline',
      {
        tweet_mode: 'extended',
        count: 200
      },
      (error, tweets, response) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(tweets.map(tweet => ({
          user: {
            name: tweet.user.screen_name,
            avatar: tweet.user.profile_image_url
          },
          text: tweet.full_text
        })));
      }
    );
  });
}

app.get('/api/tweets', (req, res) => {
  getTweets()
    .then(tweets => res.send(tweets))
    .catch(console.error);
});

app.listen(3000);
