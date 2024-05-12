import "dotenv/config";
import express from 'express';
import cors from 'cors';
import db from "./config/mongo"
import { router } from './routes/index';
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log(`[DB_URI]Database connected`));
app.listen (PORT, () => console.log(`[PORT]Server on port ${PORT}`));

//comment

//comment2