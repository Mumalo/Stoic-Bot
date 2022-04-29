import {IClientFactory, IDataSource, TweetBody} from "../types";
import {TwitterDataSource} from "../data/bot.data";
import {TwitterClientFactory} from "../data/client.factory";
import {config} from "../config/config";
import {wait} from "../utils/uitls";
import TwitterApi from "twitter-api-v2";

export class TwitterBot {
    private clientFactory: IClientFactory;
    private readonly dataSource: IDataSource<TweetBody>

    constructor(clientFactory: IClientFactory, dataSource: IDataSource<TweetBody>) {
        this.clientFactory = clientFactory;
        this.dataSource = dataSource;
    }

    private async postTweet(tweetBody: TweetBody): Promise<any> {
        console.log("postTweet method called")
        const client: TwitterApi = this.clientFactory.getClient();
        return client.v1.tweet(tweetBody.text)
    }

    public async postRandomTweet(): Promise<any> {
        const dataSource: IDataSource<TweetBody> = this.dataSource;
        const randomTweet: TweetBody = dataSource.getRandomTweet();
        console.log("Posting random tweet", JSON.stringify(randomTweet));
        return this.postTweet(randomTweet);
    }

    public static async startBot(): Promise<void> {
        console.log("Bot started successfully")
        const twitterBot: TwitterBot = TwitterBot.getInstance();
        for (; ;) {
            try {
                console.log("Preparing to post tweet...");
                await wait(5);
                await twitterBot.postRandomTweet();
            } catch (e) {
                console.log("Error in bot", e)
            }
        }
    }

    public static getInstance(): TwitterBot {
        const clientFactory: IClientFactory = new TwitterClientFactory(config);
        const dataSource: IDataSource<TweetBody> = new TwitterDataSource();
        return new TwitterBot(clientFactory, dataSource);
    }
}

