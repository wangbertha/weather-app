import { renderSearchBar } from './components/searchbar.js';
import { renderDayCard } from './components/daycard.js';
import './index.css';

const key = '3L63BZALNF6WDMKYETGMT6Q4U';
const body = document.querySelector('body');
const siteContainer = document.createElement('div');
siteContainer.classList.add('site-container');
body.appendChild(siteContainer);

const heading = document.createElement('div');
heading.classList.add('heading');
const welcome = document.createElement('h1');
welcome.classList.add('welcome');
welcome.textContent = 'Welcome to the Weather App!';
const instructions = document.createElement('p');
instructions.textContent = ' Please enter your location of choice below, and we will share its forecast for the next 7 days. Feel free to generate as many forecasts as you would like!';
heading.appendChild(welcome);
heading.appendChild(instructions);
siteContainer.appendChild(heading);

async function getWeatherData(myLocation) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${myLocation}&aggregateHours=24&unitGroup=us&shortColumnNames=false&contentType=json&key=${key}`;
    try {
        const response = await fetch(url);
        const respJson = await response.json();
        const data = respJson.locations[myLocation].values;
        return data;
    }
    catch (error) {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error');
        errorMessage.textContent = 'We were unable to identify this location. Please try again.';
        heading.appendChild(errorMessage);
    }
}

async function renderWeatherData(userLocation) {
    const weatherData = await getWeatherData(userLocation);
        if (weatherData !== undefined) {
            const forecastContainer = document.createElement('div');
            forecastContainer.classList.add('forecast-container');
            siteContainer.appendChild(forecastContainer);
            for (let i=0; i<7; i++) {
                const dayCard = renderDayCard(weatherData[i]);
                forecastContainer.appendChild(dayCard);
            }
    }

}

function renderError() {

}

renderSearchBar();

export { renderWeatherData };