import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

const app = express();

// MIDDLEWARE CONFIGURATION

dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(cors());

// HTTP REQUEST AND RESPOND

app.get('/', (req, res) => {
  res.status(200).send({ message: 'hello it is working fine' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
