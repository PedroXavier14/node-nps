require("dotenv").config();

import express from 'express';

import { PORT } from './environmentVariables';

const app = express();


app.get("/", (req, res) => {
    return res.json({message: "Hello World - NLW04"});
});

app.post("/", (req, res) => {
    return res.json({message: "Data created with success"});
});

//TODO: Create environment variables
app.listen(PORT, () => {
    console.log("🚀 Server is listening on port", PORT);
});