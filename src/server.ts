require("dotenv").config();

import 'reflect-metadata';
import express from 'express';
import { PORT } from './environmentVariables';
import "./database";
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log("🚀 Server is running on port", PORT);
});