import { renderSearchBar } from './components/searchbar.js';
import { renderDayCard } from './components/daycard.js';

const key = '3L63BZALNF6WDMKYETGMT6Q4U';
const body = document.querySelector('body');

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
    const forecastContainer = document.createElement('div');
    forecastContainer.classList.add('forecast-container');
    body.appendChild(forecastContainer);
    for (const day of weatherData) {
        const dayCard = renderDayCard(day);
        forecastContainer.appendChild(dayCard);
    }
}

renderSearchBar();

export { renderWeatherData };