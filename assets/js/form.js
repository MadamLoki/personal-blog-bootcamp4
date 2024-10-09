// Select the form element and error message element
const form = document.querySelector('form');
const errorMessage = document.querySelector('#error');

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();

    // Get form input values
    const userName = document.getElementById('username')
    const title = document.getElementById('title')
    const content = document.getElementById('content')

    // Check if all fields are filled
    if (!userName.value || !title.value || !content.value) {
        errorMessage.textContent = 'Please fill out all fields';
        return;
    }

    // Create blog post object
    const blogPost = {
        userName: userName.value,
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

// Add blog button functionality
const blogButton = document.querySelector('.blog-button');
if (blogButton) {
    blogButton.addEventListener('click', () => {
        window.location.href = 'blog.html';
    });
} else {
    console.error('Blog button not found');
}