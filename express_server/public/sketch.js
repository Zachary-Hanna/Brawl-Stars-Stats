// gets players info from server
const populatePlayerInfo = async () => {
    const playerID = '9U0Q8VUR' //placeholder for now
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
    var ctx = 'myChart2';

    var gold = 'rgb(213, 197, 21)'
    var silver = 'rgb(183, 182, 178)'
    var bronze = 'rgb(191, 128, 27)'

    var chart = new Chart(ctx, {
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



        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }

        }

    });
    chart.canvas.parentNode.style.height = '500px';
    chart.canvas.parentNode.style.width = '500px';
}











populatePlayerInfo();



var input = document.getElementById("playertag").value;
console.log(input);
