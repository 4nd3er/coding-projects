import express from 'express';
import { routes } from './routes/index.routes.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

routes(app);

app.listen(3000, () => {
    console.log('http://localhost:3000');
})