const url = 'https://covid-193.p.rapidapi.com'

async function getCountries() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9566a1c7b7msh1443f86831278eep1381e4jsn00c202c9af49',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    const response = await fetch(`${url}/countries`, options);
    const result = await response.json();
    return result;
}

async function getHistoryCountry(country){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9566a1c7b7msh1443f86831278eep1381e4jsn00c202c9af49',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    const response = await fetch(`${url}/history?country=${country}`, options);
    const result = await response.json();
    return result;
}

export {getCountries, getHistoryCountry}