var Chart = require('chart.js');

// gets players info from server
const populatePlayerInfo = async () => {
    const playerID = '9U0Q8VUR' //placeholder for now
    try {
        const response = await fetch(`/player/${playerID}`);
        const json = await response.json();

        // populate DOM elements
        document.getElementById('user').textContent = json.name;
        document.getElementById('trophyCount').textContent = json.trophies;
        document.getElementById('level').textContent = json.expLevel;
        document.getElementById('club').textContent = json.club.name;
    } catch (error) {
        console.log(error);
    }
}

// example graph created in this fucntion
const createGraphs = () => {

    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },

        // Configuration options go here
        options: {}
    });
}

populatePlayerInfo();
createGraphs();