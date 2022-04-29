import {Credentials, IClientFactory} from "../types";
import {TwitterApi} from 'twitter-api-v2';

export class TwitterClientFactory implements IClientFactory {
    private readonly credentials: Credentials;
    private twitterClient: TwitterApi | undefined;

    public constructor(credentials: Credentials) {
        this.credentials = credentials;
        this.initClient()
    }

    private initClient(): void {
        if (!this.twitterClient) {
            this.twitterClient = new TwitterApi(this.credentials)
        }
    }

    public getClient(): TwitterApi | undefined {
        if (!this.twitterClient) this.initClient();
        return this.twitterClient;
    }
}
