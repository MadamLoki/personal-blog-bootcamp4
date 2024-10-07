// Create variables that select the main element and the back button element
let mainElement;
const backButton = document.querySelector('.back-button');

// Create a function that builds an element and appends it to the DOM
function createElement(tag, className, textContent, parent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    if (parent) parent.appendChild(element);
    return element;
}

// Function that handles the case where there are no blog posts to display
function displayNoPosts() {
    const noPosts = createElement('div', 'no-posts', null, mainElement);
    createElement('h2', null, 'No Blog Posts Yet', noPosts);
    createElement('p', null, 'Be the first to create a blog post!', noPosts);
    const createPostLink = createElement('a', 'create-post-link', 'Create a Post', noPosts);
    createPostLink.href = './index.html';
}

// Function to render the list of blog posts
function renderBlogList() {
    // Ensure mainElement is selected
    mainElement = document.querySelector('main');
    if (!mainElement) {
        console.error('Main element not found');
        return;
    }

    // Clear existing content
    mainElement.innerHTML = '';

    // Read blog posts from local storage
    const blogPosts = JSON.parse(localStorage.getItem('blogData')) || [];

    if (blogPosts.length === 0) {
        displayNoPosts();
    } else {
        blogPosts.forEach(post => {
            const article = createElement('article', 'blog-post', null, mainElement);
            createElement('h2', 'post-title', post.title, article);
            createElement('p', 'post-content', post.content, article);
            createElement('p', 'post-meta', `Posted by: ${post.userName}`, article);
        });
    }
}

// Call the renderBlogList function when the page loads
document.addEventListener('DOMContentLoaded', renderBlogList);

// Redirect to the home page when the back button is clicked
if (backButton) {
    backButton.addEventListener('click', () => {
        window.location.href = './index.html';
    });
} else {
    console.error('Back button not found');
}