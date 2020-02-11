// function to retrieve a brawler
// const brawlersInfo = async () => {
//     try {
//         const response = await fetch('/brawlers');
//         const json = await response.json();
    
//         let brawler = json.name;
//         document.getElementById('brawler').textContent = brawler;
//     } catch (error) {
//         console.error(error);
//     }
// }

// gets players info from server
const populatePlayerInfo = async () => {
    const playerID = '9U0Q8VUR' //placeholder for now
    try {
        const response = await fetch(`/player/${playerID}`);
        const json = await response.json();
        await console.log(json);
    } catch (error) {
        console.log(error);
    }
}

populatePlayerInfo();