const express = require('express');
const Replicate = require ("replicate");
const router = express.Router();
require('dotenv').config();

router.get('/replicate', async (req, res) => {
  const replicate = new Replicate({
    auth: process.env.MODEL_API_TOKEN,
  });
  
  const output = await replicate.run(
    process.env.LAMA_API_TOKEN,
    {
      input: {
        prompt: "how much is 5 + 5 short answer please"
      }
    }
  );
  
  console.log(output);
    res.send('This is the Replicate page.');
  });

module.exports = router;