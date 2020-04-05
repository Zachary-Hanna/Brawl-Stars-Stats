//Sample Test User: 9U0Q8VUR
//Other users: "28GVPJRYL", "Q9J0JLU", "8VVCUQV2"

/* Code Starts Here */
$(document).ready(function () {
    $("#showGraph").click(async function () {
        const playerTagOne = $("#playerTagOne").val();
        const playerTagTwo = $("#playerTagTwo").val();
        if (playerTagOne.length > 0 && playerTagTwo.length > 0) {
            const playerOneJSON = await getPlayerJson(playerTagOne);
            const playerTwoJSON = await getPlayerJson(playerTagTwo);
            var victoryData = {
                labels: ['3v3 Victories', 'Duo Victories', 'Solo Victories'],
                datasets: [
                    {
                        label: playerOneJSON.name,
                        backgroundColor: "#3e95cd",
                        data: [playerOneJSON["3vs3Victories"], playerOneJSON.duoVictories, playerOneJSON.soloVictories]
                    }, {
                        label: playerTwoJSON.name,
                        backgroundColor: "#8e5ea2",
                        data: [playerTwoJSON["3vs3Victories"], playerTwoJSON.duoVictories, playerTwoJSON.soloVictories]
                    }
                ]
            };
            var trophyData = {
                labels: ['Highest Trophies', 'Trophies'],
                datasets: [
                    {
                        label: playerOneJSON.name,
                        backgroundColor: "#3e95cd",
                        data: [playerOneJSON.highestTrophies, playerOneJSON.trophies]
                    }, {
                        label: playerTwoJSON.name,
                        backgroundColor: "#8e5ea2",
                        data: [playerTwoJSON.highestTrophies, playerTwoJSON.trophies]
                    }
                ]
            };

            createGroupedBarChart(victoryData, "chBarWin", "Total Number of Wins");
            createGroupedBarChart(trophyData, "chBarTrophy", "Total Number of Trophies");
            $("#CompareDisplay").hide();
            $("#DataDisplay").show();
        }
    });
});

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

function createGroupedBarChart(chBarData, chartName, title) {
    /* Chart Options */
    var chBarOptions = {
        title: {
            display: true,
            text: title,
            fontColor: "white",
            fontSize: 20
        },
        legend: {
            labels: {
                fontColor: "white",
                fontSize: 18
            }
        },
        scales: {
            yAxes: [{
                gridLines: {
                    color: "#666666"
                },
                ticks: {
                    fontColor: "white",
                    fontSize: 18
                }
            }],
            xAxes: [{
                gridLines: {
                    color: "#666666"
                },
                ticks: {
                    fontColor: "white",
                    fontSize: 14
                }
            }]
        }
    };
    var chBar = document.getElementById(chartName)
    if (chBar) {
        new Chart(chBar, {
            type: 'bar',
            data: chBarData,
            options: chBarOptions
        });
    }
}

function appendUserData(data, elementName) {
    var paragraph = document.getElementById(elementName);
    paragraph.textContent = data;
}

