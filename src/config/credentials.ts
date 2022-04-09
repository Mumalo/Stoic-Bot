import dotenv from 'dotenv'
import {Credentials} from "../types";

dotenv.config()

export const credentials: Credentials = {
    consumerKey: process.env.TWITTER_CONSUMER_KEY || '',
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET || '',
    accessTokenKey: process.env.TWITTER_ACCESS_TOKEN || '',
    accessTokenSecret: process.env.TWITTER_TOKEN_SECRET || ''
}
