import {IClientFactory, IDataSource, TweetBody} from "../types";
import Twitter from "twitter-v2";
import {TwitterDataSource} from "../data/bot.data";
import {TwitterClientFactory} from "../data/client.factory";
import {credentials} from "../config/credentials";
import {wait} from "../utils/uitls";

export class TwitterBot {
    private clientFactory: IClientFactory;
    private readonly dataSource: IDataSource<TweetBody>

    constructor(clientFactory: IClientFactory, dataSource: IDataSource<TweetBody>) {
        this.clientFactory = clientFactory;
        this.dataSource = dataSource;
    }

    private async postTweet(tweetBody: TweetBody): Promise<any> {
        const client: Twitter = this.clientFactory.getClient();
        return client.post("tweets", {text: tweetBody.text});
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
            console.log("Preparing to post tweet...");
            await wait(5);
            await twitterBot.postRandomTweet();
        }
    }

    public static getInstance(): TwitterBot {
        const clientFactory: IClientFactory = new TwitterClientFactory(credentials);
        const dataSource: IDataSource<TweetBody> = new TwitterDataSource();
        return new TwitterBot(clientFactory, dataSource);
    }
}

