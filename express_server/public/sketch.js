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

    /* 3 donut charts */
    var donutOptions = {
        cutoutPercentage: 85,
        legend: {
            position: 'bottom',
            padding: 5,
            labels: {
                pointStyle: 'circle',
                usePointStyle: true
            }
        }
    };

    var donutColors = ['#007bff','#28a745','#333333']

    // donut 1
    var chDonutData1 = {
        labels: ['Bootstrap', 'Popper', 'Other'],
        datasets: [{
            backgroundColor: donutColors,
            borderWidth: 0,
            data: [74, 11, 40]
        }]
    };

    var chDonut1 = document.getElementById("chDonut1");
    if (chDonut1) {
        new Chart(chDonut1, {
            type: 'pie',
            data: chDonutData1,
            options: donutOptions
        });
    }

    // donut 2
    var chDonutData2 = {
        labels: ['Wips', 'Pops', 'Dags'],
        datasets: [{
            backgroundColor: donutColors,
            borderWidth: 0,
            data: [40, 45, 30]
        }]
    };
    var chDonut2 = document.getElementById("chDonut2");
    if (chDonut2) {
        new Chart(chDonut2, {
            type: 'pie',
            data: chDonutData2,
            options: donutOptions
        });
    }

    // donut 3
    var chDonutData3 = {
        labels: ['Angular', 'React', 'Other'],
        datasets: [{
            backgroundColor: donutColors,
            borderWidth: 0,
            data: [21, 45, 55]
        }]
    };
    var chDonut3 = document.getElementById("chDonut3");
    if (chDonut3) {
        new Chart(chDonut3, {
            type: 'pie',
            data: chDonutData3,
            options: donutOptions
        });
    }




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

