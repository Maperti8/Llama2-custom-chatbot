const express = require('express');
const Replicate = require("replicate");
const router = express.Router();
require('dotenv').config();

router.get('/replicate', async (req, res) => {
  const userPrompt = req.query.userPrompt; 

  if (!userPrompt) {
    return res.status(400).send('Missing userPrompt parameter');
  }

  const replicate = new Replicate({
    auth: process.env.MODEL_API_TOKEN,
  });

  try {
    const output = await replicate.run(
      process.env.LAMA_API_TOKEN,
      {
        input: {
          prompt: userPrompt, 
        }
      }
    );

    console.log(output);
    res.send(output); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing the request');
  }
});

module.exports = router;
