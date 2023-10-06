const express = require("express");
const router = express.Router();

const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Success! Your application is running on port ${port}.`);
});

app.get("/", (req, res) => {
    res.end(`Welcome`);
})

// Import the "about" router
const replicateRouter = require('./routes/replicate');

// Use the "about" router for the "/about" path
app.use('/', replicateRouter);

module.exports = app;
