const express = require('express');
const app = express();
const connect = require('./config/database');

const PORT = 3000;

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(PORT, async () => {
    console.log(`Server started at port ${PORT}`);
    await connect();
    console.log('Mongo db connected');

    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({
        content: 'with hooks now',
        userEmail: 'test@test.com' 
    });
    console.log(tweet);
});