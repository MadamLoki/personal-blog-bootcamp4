// TO DO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const toggle = document.getElementById('toggle');
const body = document.body;

// Function to toggle the mode
function toggleMode() {
    const img = document.querySelector('.toggle-button img');
    const currentMode = img.getAttribute('data-state');
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    applyMode(newMode);
    localStorage.setItem('mode', newMode);
    img.setAttribute('data-state', newMode);
    img.src = newMode === 'light' ? `./assets/images/sun_icon.png` : `./assets/images/moon_icon.png`;
}

// Function to apply the mode
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

// Add event listener to the toggle button
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');

    if (!toggleButton) {
        console.error('Toggle button not found');
        return;
    }

    toggleButton.addEventListener('click', toggleMode);

    // Apply the mode on page load
    const savedMode = localStorage.getItem('mode') || 'light';
    applyMode(savedMode);

    const img = toggleButton.querySelector('.toggle-button img');
    img.setAttribute('data-state', savedMode);
    img.src = savedMode === 'light' ? `./assets/images/sun_icon.png` : `./assets/images/moon_icon.png`;
});

// TO DO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
// Function to read from local storage and return the data. If no data exists, return an empty array.
function readLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// TO DO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

// Function to store a given object to the existing blog data in local storage.
function storeLocalStorage(key, newData) {
    const existingData = readLocalStorage(key);
    existingData.push(newData);
    localStorage.setItem(key, JSON.stringify(existingData));
}

// Example usage:
// Read existing blog posts from local storage
const blogData = readLocalStorage('blogPosts');

// Store a new blog post in local storage
storeLocalStorage('blogPosts', { username: 'JohnDoe', title: 'New Post', content: 'This is a new blog post.' });

// -! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};
