// Dependencies
const express = require('express');
const fetch = require('node-fetch'); 
require('dotenv').config();

// Set up server
const app = express();
app.listen(3000, () => console.log('listening at 3000'));

// Serves files in the public directory
app.use(express.static('public', {extensions: ['html', 'htm']}))



// Endpoint to look up player and return their data
app.get('/player/:playerID', async (request, response) => {
  const player_ID = request.params.playerID;
  const api_key = process.env.API_KEY;

  const req_url = `https://api.brawlstars.com/v1/players/%25${player_ID}`;

  const brawl_stars_response = await fetch(req_url, {
    headers: { 'Authorization': `Bearer ${api_key}` }
  })

  const player_data = await brawl_stars_response.json();
  response.json(player_data);
});


app.all('*', function(req, res) {
  res.redirect("404");
});