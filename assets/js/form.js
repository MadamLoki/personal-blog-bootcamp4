// Select the form element and error message element
const form = document.querySelector('form');
const errorMessage = document.querySelector('#error');

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();

    // Get form input values
    const username = document.getElementById('username')
    const title = document.getElementById('title')
    const content = document.getElementById('content')

    // Check if all fields are filled
    if (!username.value || !title.value || !content.value) {
        errorMessage.textContent = 'Please fill out all fields';
        alert("All fields are required!");
        return;
    }

    // Create blog post object
    const blogPost = {
        username: username.value, // Changed from username to username
        title: title.value,
        content: content.value,
        date: new Date().toISOString()
    };

    try {
        // Store blog post in local storage
        storeLocalStorage('blogData', blogPost);
        // Redirect to blog page
        redirectPage('./blog.html');
    } catch (error) {
        console.error('Error saving to local storage', error);
        errorMessage.textContent = 'An error occurred. Please try again.';
    }
}

// Function to redirect to another page
function redirectPage() {
    window.location.href = 'blog.html';
}

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    if (!form) {
        console.error('No form found');
        return;
    }
    form.addEventListener('submit', handleFormSubmission);
});

// Function to store data in local storage
function storeLocalStorage(key, newData) {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    existingData.push(newData);
    localStorage.setItem(key, JSON.stringify(existingData));
}