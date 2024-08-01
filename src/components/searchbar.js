import './searchbar.css';
import { renderWeatherData } from '../index.js';

let userLocation;

function createSearchBar() {
    // Create searchbar elements and attributes
    const siteContainer = document.querySelector('.site-container');
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
    siteContainer.appendChild(searchContainer);

    // Add event listener to save user input
    searchBar.addEventListener("keyup", (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            userLocation = e.target.value;
            renderWeatherData(userLocation);
        }
    });
}

function renderSearchBar() {
    createSearchBar();
}

export { renderSearchBar };