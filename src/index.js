import { renderSearchBar } from './components/searchbar.js';

const key = '3L63BZALNF6WDMKYETGMT6Q4U';

async function getWeatherData(myLocation) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${myLocation}&aggregateHours=24&unitGroup=us&shortColumnNames=false&contentType=json&key=${key}`;
    try {
        const response = await fetch(url);
        const respJson = await response.json();
        const data = respJson.locations[myLocation].values;
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

async function renderWeatherData(userLocation) {
    const weatherData = await getWeatherData(userLocation);
    const tempContainer = document.createElement('div');
    for (const day of weatherData) {
        const temp = document.createElement('p');
        temp.textContent = day.temp;
        tempContainer.appendChild(temp);
    }
    const body = document.querySelector('body');
    body.appendChild(tempContainer);
}

renderSearchBar();

export { renderWeatherData };