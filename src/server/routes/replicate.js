const express = require('express');
const Replicate = require ("replicate");
const router = express.Router();

// Define a route for "/about"
router.get('/replicate', async (req, res) => {
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
  "meta/llama-2-13b-chat:f4e2de70d66816a838a89eeeb621910adffb0dd0baba3976c96980970978018d",
  {
    input: {
      prompt: "Hello"
    }
  }
);

console.log(output);
  res.send('This is the Replicate page.');
});

module.exports = router;