// TO DO: Create a variable that selects the main element, and a variable that selects the back button element

// TO DO: Create a function that builds an element and appends it to the DOM

// TO DO: Create a function that handles the case where there are no blog posts to display

// TO DO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TO DO: Call the `renderBlogList` function

// TO DO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked



// Call the renderBlogList function when the page loads
document.addEventListener('DOMContentLoaded', renderBlogList);

// Redirect to the home page when the back button is clicked
backButton.addEventListener('click', () => redirectPage('index.html'));