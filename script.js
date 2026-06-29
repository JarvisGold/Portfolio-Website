
console.log("Welcome to Jarvis Portfolio!");

window.onload = function () {
    alert("Welcome to my Personal Portfolio Website!");
};

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("You clicked: " + link.textContent);
    });
});
