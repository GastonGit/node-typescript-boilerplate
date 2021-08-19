import { Router } from 'express';
import exampleRouter from './routes/example';

const routes = Router();

routes.use('/example', exampleRouter);

export default routes;
