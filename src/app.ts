import express, {NextFunction, Request, Response} from 'express';
import {TwitterBot} from "./bot/bot";


(async () => {
    const app = express();
    const port = process.env.PORT || 8082;

    // app.use(async(req: Request, res: Response, next: NextFunction) => {
    //     await TwitterBot.startBot();
    //     next()
    // })

    app.listen(port, async () => {
        await TwitterBot.startBot();
        console.log("App started successfully")
    });

    // app.use(handleError);
})()
