const {TweetRepository} = require('../repository/index');

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
    }

    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)); // this regex extracts hashtags
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        return tweet;  
    }
}

module.exports = TweetService;