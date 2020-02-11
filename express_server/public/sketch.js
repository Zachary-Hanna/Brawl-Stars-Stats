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

populatePlayerInfo();