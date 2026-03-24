import ufoLandingImg from './assets/alien_landing.png';

export function loadHome() {
    console.log('home loaded')
    const content = document.getElementById("content");

    // Clear content first
    content.innerHTML = "";
    

    //home page wrapper (whole page)
    let homeWrapper = document.createElement('div');
    homeWrapper.classList.add('home-container');

    homeWrapper.style.backgroundImage = `url(${ufoLandingImg})`;

    homeWrapper.style.backgroundSize = "cover";
    homeWrapper.style.backgroundPosition = "center";
    homeWrapper.style.height = "100vh"; // Make sure it covers the screen




    //headline wrapper (top of page)
    let headlineWrapper = document.createElement('div');
    headlineWrapper.classList.add('head-line-container');


    //indivual page elements
    let headline = document.createElement('h1');
    headline.id = 'headline'
    headline.textContent = 'UFO Pizza'

    //sub title tag
    const subtitleTag = document.createElement('div');
    subtitleTag.classList.add('subtitleTag');
    const fluff = document.createElement('p');
    fluff.textContent = 'TRANSMISSION STATUS: ENCRYPTED';



    // 3. Append the children to the WRAPPER
    headlineWrapper.appendChild(headline);
    homeWrapper.appendChild(headlineWrapper);
    headlineWrapper.appendChild(subtitleTag);
    subtitleTag.appendChild(fluff);


    // 4. Finally, append the WRAPPER to the main #content div
    content.appendChild(homeWrapper);
    // alienHome.apppendChild(homeWrapper)
  
}

