// Select the form element
const form = document.querySelector('form');
const errorMessage = document.querySelector('#error');

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();

    const username = document.getElementById('username');
    const title = document.getElementById('title');
    const content = document.getElementById('content');

    if (!username || !title || !content) {
        console.error('One or more form elements not found');
        return;
    }

    const usernameValue = username.value.trim();
    const titleValue = title.value.trim();
    const contentValue = content.value.trim();

    if (!usernameValue || !titleValue || !contentValue) {
        errorMessage.textContent = "Please complete all fields.";
        return;
    }

    const blogPost = {
        username: usernameValue,
        title: titleValue,
        content: contentValue,
        date: new Date().toISOString()
    };

    try {
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        redirectPage();
    } catch (error) {
        console.error('Error accessing local storage:', error);
        errorMessage.textContent = "An error occurred while saving your post. Please try again.";
    }
}

// Function to redirect to the blog page
function redirectPage() {
    window.location.href = 'blog.html';
}

// Add event listener to the form on submit
document.addEventListener('DOMContentLoaded', () => {
    if (!form) {
        console.error('Form element not found');
        return;
    }

    form.addEventListener('submit', handleFormSubmission);
});