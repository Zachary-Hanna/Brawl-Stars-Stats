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



    var stackedBar = new Chart('comboChart', {
        type: 'bar',
        data: {
            datasets: [
                {
                    label: 'Current Trophies',
                    data: [67.8],
                    backgroundColor: '#D6E9C6' // green
                },
                {
                    label: 'Highest Trophies',
                    data: [20.7],
                    backgroundColor: '#FAEBCC' // yellow
                },

            ],
            labels: [],
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });

}
    populatePlayerInfo('9U0Q8VUR');

    //Sample: 9U0Q8VUR
    function onClick() {
        populatePlayerInfo(document.getElementById('playerTag').value);
    }

