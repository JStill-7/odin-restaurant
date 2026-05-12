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
    homeWrapper.style.height = "100vh"; 




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

    const fluff1 = document.createElement('p');
    fluff1.innerHTML = `<span class="dim">ORIGIN:</span> SECTOR 7G`;

    const fluff2 = document.createElement('p');
    fluff2.innerHTML = '<span class="dim">STATUS </span>FUEL: LOW';

    const fluff3 = document.createElement('p');
    fluff3.innerHTML = '<span class="dim">ENTRY:</span> 04:00 SEC'



    // Append the children to the WRAPPER
    headlineWrapper.appendChild(headline);
    homeWrapper.appendChild(headlineWrapper);
    headlineWrapper.appendChild(subtitleTag);
    subtitleTag.appendChild(fluff1);
    subtitleTag.appendChild(fluff2);
    subtitleTag.appendChild(fluff3);


    content.appendChild(homeWrapper);

}

