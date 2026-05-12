import './styles.css'
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';

// default home view
loadHome();

//switching to other pages
const navButtons = document.querySelectorAll("nav button");
const contentDiv = document.getElementById("content");

navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // Clear the current content
        contentDiv.innerHTML = "";

        // Determine which tab was clicked
        const tabName = e.target.textContent.toLowerCase();

        if (tabName === "home") {
            loadHome();
        } else if (tabName === "menu") {
            loadMenu();
        } else if (tabName === "about") {
            loadAbout();
        }
    });
});

console.log('testing.....')