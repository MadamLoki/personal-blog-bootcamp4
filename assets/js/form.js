// TO DO: Create a variable that selects the form element

const form = document.querySelector('form');
const errorMessage = document.querySelector('#error');


// TO DO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function handleFormSubmission(event) {
    event.preventDefault();

    const userName = document.getElementById('username')
    const title = document.getElementById('title')
    const content = document.getElementById('content')

    if (!userName.value || !title.value || !content.value) {
        errorMessage.textContent = 'Please fill out all fields';
        return;
    }

    const blogPost = {
        userName: userName.value,
        title: title.value,
        content: content.value,
        date: new Date().toISOString()
    };

    try {
        storeLocalStorage('blogData', blogPost);
        redirectPage('./blog.html');
    } catch (error) {
        console.error('Error saving to local storage', error);
        error.Message.textContent = 'An error occurred. Please try again.';
    }
}

function redirectPage() {
    window.location.href = 'blog.html';
}

// TO DO: Add an event listener to the form on submit. Call the function to handle the form submission.

document.addEventListener('DOMContentLoaded', () => {

    if (!form) {
        console.error('No form found');
        return;
    }
        form.addEventListener('submit', handleFormSubmission);
    }
);

// Add blog button functionality
const blogButton = document.querySelector('.blog-button');
if (blogButton) {
    blogButton.addEventListener('click', () => {
        window.location.href = 'blog.html';
    });
} else {
    console.error('Blog button not found');
}