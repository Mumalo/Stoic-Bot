import express, {NextFunction, Request, Response} from 'express';
import {TwitterBot} from "./bot/bot";

const app = express();

// app.use((req: Request, res: Response, next: NextFunction) => {
//     TwitterBot.startBot();
//     next()
// })

app.listen(3000, async () => {
    await TwitterBot.startBot();
    console.log("App started successfully")
});
