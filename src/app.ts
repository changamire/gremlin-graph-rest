import express from 'express';
import cors from 'cors';
import ServerlessHttp from 'serverless-http';
import router from './routes';

const app: express.Application = express();
app.use(cors());
app.use(express.json());

app.use('/graph', router);

const slsWrapper = ServerlessHttp(app);

export {app as localServer};

export {slsWrapper as lambdaHandler};