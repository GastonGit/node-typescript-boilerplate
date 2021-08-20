import express, { Application } from 'express';
import routes from './routes';

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(routes);

app.listen(PORT, (): void => {
    console.log(`Server Running at https://localhost:${PORT}`);
});
