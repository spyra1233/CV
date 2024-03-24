// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to toggle the display of the scroll to top button
function toggleScrollToTopButton() {
    const scrollButton = document.getElementById('scrollToTopButton');
    // Show button if page is scrolled more than 100px
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Event listener for scrolling
window.onscroll = function() {
    toggleScrollToTopButton();
};
