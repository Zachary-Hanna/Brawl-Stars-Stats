// Dependencies
const express = require('express');
const fetch = require('node-fetch'); // note: install this!

// Set up server
const app = express();
app.listen(3000, () => console.log('listening at 3000'));

// Serves files in the public directory
app.use(express.static('public'))

// New endpoint to handle brawlers info
app.get('/brawlers', async (request, response) => {
    const brawler_url = `https://api.brawlstars.com/v1/brawlers/16000000`;

    const brawler_response = await fetch(brawler_url, {
        headers: { 'Authorization': 'Bearer key'}
    });
    const brawler_data = await brawler_response.json();
    response.json(brawler_data);
});