import './dashboard.css';
import { renderWeatherData } from './../index.js';

let userLocation;

function createSearchBar() {
    // Create searchbar elements and attributes
    const body = document.querySelector('body');
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    const searchBarLabel = document.createElement('label');
    searchBarLabel.htmlFor = 'search-bar';
    searchBarLabel.textContent = 'Location:';
    const searchBar = document.createElement('input');
    searchBar.classList.add('search-bar');
    searchBar.setAttribute('id', 'search-bar');
    searchBar.setAttribute('type', 'search');
    searchContainer.appendChild(searchBarLabel);
    searchContainer.appendChild(searchBar);
    body.appendChild(searchContainer);

    // Add event listener to save user input
    searchBar.addEventListener("keyup", (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            userInput = e.target.value;
            console.log(userLocation);
            renderWeatherData(userLocation);
        }
    });
}

function renderSearchBar() {
    createSearchBar();
}

export { renderSearchBar };