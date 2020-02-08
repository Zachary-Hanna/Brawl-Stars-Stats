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
        headers: { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjExZDEyMjEzLTQ5Y2QtNDk3OC05NjFiLTJhOTE3NzAwNjlhZiIsImlhdCI6MTU4MTExODc4Nywic3ViIjoiZGV2ZWxvcGVyLzViNjY3MTM0LWU3ZDktOWRkYS02NTgwLTI4OTFmNzRjOGI1ZCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNTAuMjQ5LjIxNS4xNjYiXSwidHlwZSI6ImNsaWVudCJ9XX0.N3HM7tfLqq6Jm8OWwy8R40FTCNU68-w0g-A0GWxmRiVBt8_xEl1cRMpWLLslApzClbDloEZdtV1DjwI3BT1O-Q'}
    });
    const brawler_data = await brawler_response.json();
    response.json(brawler_data);
});