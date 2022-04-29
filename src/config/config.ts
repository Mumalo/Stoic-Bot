import dotenv from 'dotenv'
import {Credentials} from "../types";

dotenv.config()

export const config: Credentials = {
    appKey: process.env.TWITTER_CONSUMER_KEY || '',
    appSecret: process.env.TWITTER_CONSUMER_SECRET || '',
    accessToken: process.env.TWITTER_ACCESS_TOKEN || '',
    accessSecret: process.env.TWITTER_TOKEN_SECRET || ''
}
