export type Credentials = {
    consumerKey: string,
    consumerSecret: string,
    accessTokenKey: string,
    accessTokenSecret: string
}


export type TweetBody = {
    text: string,
    author: string
}

export interface IClientFactory {
    getClient(): any;
}

export interface IDataSource<T> {
    loadData(): void;

    getRandomTweet(): T;
}
