import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler.js';

import dbConnect from './config/database.js';
import courseRoutes from './routes/courseRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

// DATABASE CONNECTION

dbConnect();

// MIDDLEWARE CONFIGURATION

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(logger('dev'));
app.use(cors());

// HTTP REQUEST AND RESPOND

app.use('/courses', courseRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
