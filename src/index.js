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
    // const tweet = await Tweet.create({
    //     content: 'Second tweet',
    //     userEmail: 'test@test.com'
    // });
    // const tweets = await Tweet.find({ userEmail: 'test@test.com' });
    // const tweet = await Tweet.findById('64849567a0de1e5e29431a09');
    // tweet.userEmail = 'test1@test.com';
    // await tweet.save();
    // console.log(tweet);
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getAll(0,4);
    console.log(tweet[0].contentWithEmail);
});