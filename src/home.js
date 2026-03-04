export function loadHome() {
    console.log('home loaded')
    const content = document.getElementById("content");

    // Clear content first
    content.innerHTML = "";

    //home page wrapper (whole page)
    let homeWrapper = document.createElement('div');
    homeWrapper.classList.add('home-container');

    //headline wrapper (top of page)
    let headlineWrapper = document.createElement('div');
    headlineWrapper.classList.add('head-line-container');


    //indivual page elements
    let headline = document.createElement('h1');
    headline.id = 'headline'
    headline.textContent = 'UFO Pizza'

    //p tag
    let slogan = document.createElement('p')
    slogan.id = 'slogan'
    slogan.textContent = 'pizza out of this world !'

    //img here

    // 3. Append the children to the WRAPPER
    headlineWrapper.appendChild(headline);
    homeWrapper.appendChild(headlineWrapper);
    headlineWrapper.appendChild(slogan);

    // 4. Finally, append the WRAPPER to the main #content div
    content.appendChild(homeWrapper);
  
}

