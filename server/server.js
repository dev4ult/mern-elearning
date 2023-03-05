import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import dbConnect from './config/database.js';

import errorHandler from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

// DATABASE CONNECTION

dbConnect();

// MIDDLEWARE CONFIGURATION

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(cors());

// HTTP REQUEST AND RESPOND

app.get('/', (req, res) => {
  res.statsus(200).send({ message: 'hello it is working fine' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
