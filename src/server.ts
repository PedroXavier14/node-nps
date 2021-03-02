import express from 'express';

const app = express();


app.get("/", (req, res) => {
    return res.json({message: "Hello World - NLW04"});
});

app.post("/", (req, res) => {
    return res.json({message: "Data created with success"});
});

//TODO: Create environment variables
app.listen(3333, () => {
    console.log("🚀 Server is listening on port 3333");
});