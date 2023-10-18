const express = require("express");
require('dotenv').config();

const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Application is running on port ${port}.`);
});

app.get("/", (req, res) => {
    res.end(`Backend for Llama2 chatbot`);
})

// Import the "about" router
const replicateRouter = require('./routes/replicate');

// Use the "about" router for the "/about" path
app.use('/', replicateRouter);

module.exports = app;
