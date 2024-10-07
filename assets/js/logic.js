// TO DO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.getElementById('toggle');
const body = document.body;

//Function to toggle dark mode
function toggleMode() {
    const img = document.querySelector('.toggle-button img');
    const lightMode = img.getAttribute('data-state');
    const darkMode = lightMode === 'light' ? 'dark' : 'light';
    applyMode(darkMode);
    localStorage.setItem('mode', darkMode);
    img.setAttribute('data-state', darkMode);
    img.src = darkMode === 'light' ? './assets/images/sun_icon.png' : './assets/images/moon_icon.png';
}

//Function to apply dark mode
function applyMode(mode) {
    const body = document.body;

    if (mode === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
}

//Add event listener to toggle button
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    
    if (!toggleButton) {
        console.error('No toggle button found');
        return;
    }
        toggleButton.addEventListener('click', toggleMode);

        //Check local storage for mode
        const savedMode = localStorage.getItem('mode') || 'light';
        applyMode(savedMode);

        const img = toggleButton.querySelector('img');
        img.setAttribute('data-state', savedMode);
        img.src = savedMode === 'light' ? './assets/images/sun_icon.png' : './assets/images/moon_icon.png';
    }
);

// TO DO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


// TO DO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// Use the following function whenever you need to redirect to a different page

let redirectURL = './index.html';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};
