// Welcome message
console.log("Welcome to Jarvis Portfolio!");

// Show a message when the page loads
window.onload = function () {
    alert("Welcome to my Personal Portfolio Website!");
};

// Select all navigation links
const navLinks = document.querySelectorAll("nav a");

// Add a click event to each navigation link
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("You clicked: " + link.textContent);
    });
});