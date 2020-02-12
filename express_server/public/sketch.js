// gets players info from server
const populatePlayerInfo = async (playerID) => {

    try {
        const response = await fetch(`/player/${playerID}`);
        const json = await response.json();

        console.log(json);

        // populate DOM elements
        document.getElementById('user').textContent = json.name;
        document.getElementById('trophyCount').textContent = json.trophies;
        document.getElementById('level').textContent = json.expLevel;
        document.getElementById('club').textContent = json.club.name;
    } catch (error) {
        console.log(error);
    }
}

//Sample: 9U0Q8VUR
function onClick() {
    populatePlayerInfo(document.getElementById('playerTag').value);
}






