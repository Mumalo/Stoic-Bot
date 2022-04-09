import {IDataSource, TweetBody} from "../types";
import data from './quotes.json'

export class TwitterDataSource implements IDataSource<TweetBody> {
    private readonly tweetsList: Array<TweetBody>;

    constructor() {
        this.tweetsList = new Array<TweetBody>();
        this.loadData()
    }

    public loadData(): void {
        if (this.tweetsList.length > 0) return;
        for (const item in data) {
            const obj: TweetBody = JSON.parse(item);
            this.tweetsList.push(obj)
        }
    }

    public getRandomTweet(): TweetBody {
        const tweetsArray: Array<TweetBody> = this.tweetsList;
        if (tweetsArray.length == 0) this.loadData();
        const index: number = Math.floor(Math.random() * tweetsArray.length);
        return tweetsArray[index];
    }
}
