//import images dont forget
import spacePizza from './assets/space pizza.png';
import spacePizza2 from './assets/space pizza 2.png';
import spaceSoda from './assets/space soda1.png';
import spaceCake from './assets/space cake.png';

export function loadMenu() {
    const content = document.getElementById("content");

    //menu wrapper
    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-container');
    
    // PIZZA SECTION
    const pizzaSection = createMenuSection("PIZZAS");
    pizzaSection.appendChild(createFoodCard(spacePizza, 'PEPPORINI PIZZA', 'A classic pepporini pizza with sauce,cheese, and pepporini. A taste of Earth.'));
    pizzaSection.appendChild(createFoodCard(spacePizza2, 'VEGGIE PIZZA','Our same classic pizza but with veggies instead of meat for our vegans. Made with vegan cheese.'));

    //  DRINK SECTION
    const drinkSection = createMenuSection("DRINKS");
    drinkSection.appendChild(createFoodCard(spaceSoda, 'LIME SODA', 'The famous fruit from Earth the Lime in a carbonated fizzy form.'));

    // DESSERT SECTION 
    const desertSection = createMenuSection("DESSERTS");
    desertSection.appendChild(createFoodCard(spaceCake, 'CHOCOLATE CAKE', 'Our famous chocholate cake made with real belgian chocholate. (Its a country on Earth)'));

    // Add all sections to the main wrapper
    menuWrapper.appendChild(pizzaSection);
    menuWrapper.appendChild(drinkSection);
    menuWrapper.appendChild(desertSection);

    content.appendChild(menuWrapper);
}



// Reusable Section Creator
function createMenuSection(titleText) {
    const sectionWrapper = document.createElement('section');
    sectionWrapper.classList.add('menu-section');

    const title = document.createElement('h2');
    title.classList.add('section-header'); 
    title.textContent = titleText;

    sectionWrapper.appendChild(title);
    return sectionWrapper; 
}


function createFoodCard(imageSrc, title, description) {
    const card = document.createElement('div');
    card.classList.add('food-card');

    card.innerHTML = `
        <img src="${imageSrc}" class="food-img" alt="Specimen">
        <div class="food-text-content">
            <h3 class="food-title">${title}</h3>
            <p class="food-description">${description}</p>
        </div>
    `;

    return card;
}
    