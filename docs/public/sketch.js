// function to retrieve a brawler
const brawlersInfo = async () => {
    try {
        const response = await fetch('/brawlers');
        const json = await response.json();
    
        let brawler = json.name;
        document.getElementById('brawler').textContent = brawler;
    } catch (error) {
        console.error(error);
    }
}

brawlersInfo();