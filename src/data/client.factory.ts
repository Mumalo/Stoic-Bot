import {IClientFactory, Credentials} from "../types";
import Twitter from "twitter-v2";


export class TwitterClientFactory implements IClientFactory {
    private credentials: Credentials;
    private twitterClient: Twitter | undefined;

    public constructor(credentials: Credentials) {
        this.credentials = credentials;
        this.initClient()
    }

    private initClient(): void {
        if (!this.twitterClient) {
            this.twitterClient = new Twitter({
                consumer_key: this.credentials.consumerKey,
                consumer_secret: this.credentials.consumerSecret,
                access_token_key: this.credentials.accessTokenKey,
                access_token_secret: this.credentials.accessTokenSecret,
            })
        }
    }

    public getClient(): Twitter | undefined {
        if (!this.twitterClient) this.initClient();
        return this.twitterClient;
    }
}
