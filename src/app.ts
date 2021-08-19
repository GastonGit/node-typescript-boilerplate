import express, {Request,Response,Application} from 'express';
import routes from './routes';

const app:Application = express();
const PORT = process.env.PORT || 8000;

app.use(routes);

app.get("/", (req:Request, res:Response):void => {
    res.send("Boiler!")
});

app.listen(PORT, ():void => {
    console.log(`Server Running at https://localhost:${PORT}`);
});

