// TO DO: Create a variable that selects the main element, and a variable that selects the back button element

// TO DO: Create a function that builds an element and appends it to the DOM

// TO DO: Create a function that handles the case where there are no blog posts to display

// TO DO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TO DO: Call the `renderBlogList` function

// TO DO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

document.addEventListener('DOMContentLoaded', () => {

const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', () => redirectIndex('./index.html'));
    } else {
        console.error('Back button not found');
}

const blogButton = document.querySelector('.blog-button');
    if (blogButton) {
        blogButton.addEventListener('click', () => redirectBlog('./blog.html'));
    } else {
        console.error('Blog button not found');
    }
});