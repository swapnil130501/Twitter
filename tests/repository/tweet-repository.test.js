import { TweetRepository } from "../../src/repository";
import Tweet from "../../src/models/tweet";

jest.mock('../../src/models/tweet.js');

describe('Create tweet tests', () => {
    test('should create a new tweet and return it', async () => {
        const data = {
            content: 'Testing tweet'
        }
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
            return {...data, createdAt: '2023-06-22', updatedAt: '2023-06-22'}
        });
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data);
    
        expect(spy).toHaveBeenCalled();
        expect(tweet.content).toBe(data.content);
    });
    
    test('should not create a tweet and throw an exception', async () => {
        const data = {
            content: 'Testing tweet'
        }
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
            throw new Error('something went wrong');
        });
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data).catch(err => {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('something went wrong');
        });
    });
});

describe('Get all tweets tests', () => {
    test('should avle to get all tweets', async () => {
        const data = {
            content: ['Testing tweet']
        }
        const tweetsArray = [{...data, createdAt: '2023-06-22', updatedAt: '2023-06-22'}, {...data, createdAt: '2023-06-22', updatedAt: '2023-06-22'}, {...data, createdAt: '2023-06-22', updatedAt: '2023-06-22'}];
        const findResponse = {tweetsArray};
        findResponse.limit = jest.fn((limit) => findResponse.tweetsArray.slice(0,2));
        findResponse.skip = jest.fn((offset) => findResponse); 
        const spy = jest.spyOn(Tweet, 'find').mockImplementation(() => {
            return findResponse;
        });
        const tweetRepository = new TweetRepository();
        const tweets = await tweetRepository.getAll(0,2);
    
        expect(spy).toHaveBeenCalled();
        expect(tweets).toHaveLength(2);
    });
});
