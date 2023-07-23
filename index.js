const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000 // You can use any available port number

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Invalid query parameters' });
  }

  try {
    const promises = urls.map(url => axios.get(url));
    const responses = await Promise.all(promises);

    const numbers = responses.map(response => response.data).filter(data => !isNaN(data));
    res.json({ numbers });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching numbers from URLs' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});