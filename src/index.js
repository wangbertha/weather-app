import { renderSearchBar } from './components/searchbar.js';
import { renderDayCard } from './components/daycard.js';
import './index.css';

const key = '3L63BZALNF6WDMKYETGMT6Q4U';
const body = document.querySelector('body');
const siteContainer = document.createElement('div');
siteContainer.classList.add('site-container');
body.appendChild(siteContainer);

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
    siteContainer.appendChild(forecastContainer);
    for (let i=0; i<7; i++) {
        const dayCard = renderDayCard(weatherData[i]);
        forecastContainer.appendChild(dayCard);
    }
}

renderSearchBar();

export { renderWeatherData };