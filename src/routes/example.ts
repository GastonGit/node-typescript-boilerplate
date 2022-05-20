import config from 'config';
import { Router, Request, Response } from 'express';
const exampleRouter = Router();

exampleRouter.get('/', (_req: Request, res: Response) => {
    return res.json(config.get('example'));
});

export default exampleRouter;
