import express from 'express';
import morgan from 'morgan';
import router from './routes/palapaRouter.js';

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/palapa', router);


export default app;