import { Router, Request, Response } from 'express';
const exampleRouter = Router();

exampleRouter.get('/', (request: Request, response: Response) => {
    return response.json('Success');
});

export default exampleRouter;
