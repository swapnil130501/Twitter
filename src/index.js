const express = require('express');
const app = express();
const connect = require('./config/database');

const PORT = 3000;

const Tweet = require('./models/tweet');

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(PORT, async () => {
    console.log(`Server started at port ${PORT}`);
    await connect();
    console.log('Mongo db connected');

    const tweets = await Tweet.find({
        content: ["test", "Second tweet", "abc"]
    });
    console.log(tweets);
});