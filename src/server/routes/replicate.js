const express = require('express');
const Replicate = require('replicate');
const router = express.Router();
require('dotenv').config();

router.get('/replicate', async (req, res) => {
  
  const prompt = req.query['userPromt'];

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const output = await replicate.run(process.env.LAMA_API_TOKEN, {
    input: {
      prompt: prompt, 
    },
  });

  console.log(output);
  res.send(output);
});

module.exports = router;
