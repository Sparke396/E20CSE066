const axios = require('axios');

async function fetchDataFromUrl(url) {
  try {
    const response = await axios.get(url);
    console.log(`Data from ${url}:`, response.data);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
  }
}

fetchDataFromUrl('https://20.244.56.144/numbers/odd');
fetchDataFromUrl('https://20.244.56.144/numbers/primes');