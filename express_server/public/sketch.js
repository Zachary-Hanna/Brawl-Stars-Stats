//Sample Test User: 9U0Q8VUR

/* Code Starts Here */



initializePage();

// sets the page up with 3 different users
async function initializePage() {
    const data = await getPlayerJson("28GVPJRYL")
    const data2 = await getPlayerJson("Q9J0JLU")
    const data3 = await getPlayerJson("8VVCUQV2")

    createDonutChart(data, "chDonut1");
    appendUserData(data.name, "username1");
    appendUserData(data.expLevel, "level1");
    appendUserData(data.club.name, "club1");

    createDonutChart(data2, "chDonut2");
    appendUserData(data2.name, "username2");
    appendUserData(data2.expLevel, "level2");
    appendUserData(data2.club.name, "club2");

    createDonutChart(data3, "chDonut3");
    appendUserData(data3.name, "username3");
    appendUserData(data3.expLevel, "level3");
    appendUserData(data3.club.name, "club3");
}

/* On Click Handlers */
async function victoryChartOne() {
    const data = await getPlayerJson(document.getElementById('playerTag').value);
    createDonutChart(data, "chDonut1");
    appendUserData(data.name, "username1");
    appendUserData(data.expLevel, "level1");
    appendUserData(data.club.name, "club1");
}

async function victoryChartTwo() {
    const data = await getPlayerJson(document.getElementById('playerTag2').value);
    createDonutChart(data, "chDonut2");
    appendUserData(data.name, "username2");
    appendUserData(data.expLevel, "level2");
    appendUserData(data.club.name, "club2");
}

async function victoryChartThree() {
    const data = await getPlayerJson(document.getElementById('playerTag3').value);
    createDonutChart(data, "chDonut3");
    appendUserData(data.name, "username3");
    appendUserData(data.expLevel, "level3");
    appendUserData(data.club.name, "club3");
}

/* Helper Functions */
async function getPlayerJson(playerID) {
    try {
        const response = await fetch(`/player/${playerID}`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

function createDonutChart(json, chartName) {
    /* Chart Options */
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
    // gold, silver, bronze
    var donutColors = ['#d5c515', '#b7b6b2', '#bf801b']

    var chDonutData = {
        labels: ['3v3 Victories', 'Solo Victories', 'Duo Victories'],
        datasets: [{
            backgroundColor: donutColors,
            borderWidth: 0,
            data: [json["3vs3Victories"], json.soloVictories, json.duoVictories]
        }]
    };
    var chDonut = document.getElementById(chartName);
    if (chDonut) {
        new Chart(chDonut, {
            type: 'pie',
            data: chDonutData,
            options: donutOptions
        });
    }
}

function appendUserData(data, elementName) {
    var paragraph = document.getElementById(elementName);
    paragraph.textContent = data;
}


/*
const createGraphs = (json) => {
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
*/
