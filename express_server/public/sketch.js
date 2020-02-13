// gets players info from server
const populatePlayerInfo = async (playerID) => {

    try {
        const response = await fetch(`/player/${playerID}`);
        const json = await response.json();

        console.log(json);
        createGraphs(json);
    } catch (error) {
        console.log(error);
    }
}

// example graph created in this fucntion
const createGraphs = (json) => {
    var gold = 'rgb(213, 197, 21)'
    var silver = 'rgb(183, 182, 178)'
    var bronze = 'rgb(191, 128, 27)'

    var victoryChart = new Chart('victoryChart', {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    json["3vs3Victories"],
                    json.soloVictories,
                    json.duoVictories
                ],

                backgroundColor: [
                    `${gold}`,
                    `${silver}`,
                    `${bronze}`
                ],
                borderColor: [
                    `${gold}`,
                    `${silver}`,
                    `${bronze}`
                ],
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                '3v3 Victories',
                'Solo Victories',
                'Duo Victories'
            ],

        },
        options: {}
    });
    victoryChart.canvas.parentNode.style.height = '500px';
    victoryChart.canvas.parentNode.style.width = '500px';

    var brawlerLevel = new Chart('brawlerLevel', {
        type: 'polarArea',
        data: {
            datasets: [{
                data: []
            }],
        
            labels: []
        },
        options: {}
    });

    for (const brawler of json.brawlers) {
        brawlerLevel.data.datasets[0].data.push(brawler.power);
        brawlerLevel.data.labels.push(brawler.name);
    }
    brawlerLevel.update();
    
    var brawlerRank = new Chart('brawlerRank', {
        type: 'polarArea',
        data: {
            datasets: [{
                data: []
            }],
        
            labels: []
        },
        options: {}
    });

    for (const brawler of json.brawlers) {
        brawlerRank.data.datasets[0].data.push(brawler.rank);
        brawlerRank.data.labels.push(brawler.name);
    }
    brawlerRank.update();

    var currentTrophies = new Chart('currentTrophies', {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [],
            }],

            labels: [],

        },
        options: {}

    });

    for (const brawler of json.brawlers) {
        currentTrophies.data.datasets[0].data.push(brawler.trophies);
        currentTrophies.data.labels.push(brawler.name);
    }
    currentTrophies.update();

    var highestTrophyCount = new Chart('highestTrophies', {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [],
            }],

            labels: [],
        },
        options: {}
    });

    for (const brawler of json.brawlers) {
        highestTrophyCount.data.datasets[0].data.push(brawler.highestTrophies);
        highestTrophyCount.data.labels.push(brawler.name);
    }
    highestTrophyCount.update();
    
}

//Sample: 9U0Q8VUR
function onClick() {
    populatePlayerInfo(document.getElementById('playerTag').value);
}
