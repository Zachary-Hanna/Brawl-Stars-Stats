//Sample Test User: 9U0Q8VUR
//Other users: "28GVPJRYL", "Q9J0JLU", "8VVCUQV2"

/* Code Starts Here */
$(document).ready(function () {
    $("#showGraph").click(async function () {
        const playerTag = $("#playerTag").val();
        if (!playerTag.length == 0) {
            const data = await getPlayerJson(playerTag);
            createDonutChart(data, "chDonut1");
            $("#HomeDisplay").hide();
            $("#DataDisplay").show();
        }
    });
});

/* Helper Functions */
async function getPlayerJson(playerID) {
    try {
        const response = await fetch(`/player/${playerID}`);
        const json = await response.json();
        console.log(json);
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
                usePointStyle: true,
                fontColor: "white",
                fontSize: 14
            }
        }
    };
    // colors are: gold, silver, bronze
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

