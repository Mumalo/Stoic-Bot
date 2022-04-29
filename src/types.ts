export type Credentials = {
    appKey: string,
    appSecret: string,
    accessToken: string,
    accessSecret: string
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
