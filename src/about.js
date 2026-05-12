import ufoPizza from './assets/ufoPizza.png';

export function loadAbout() {
    const content = document.getElementById("content");

    const AboutWrapper = document.createElement('div');
    AboutWrapper.classList.add('about-container');

    const title = document.createElement('h1');
    title.classList.add('about-title')
    title.textContent = "ABOUT UFO PIZZA";
    title.style.color = "#00ff41";

    const ufoImg = document.createElement('img');
    ufoImg.classList.add('ufoImg');
    ufoImg.src = ufoPizza;


    const bodyParagraph = document.createElement('div');
    bodyParagraph.textContent= 'Founded by The Greys.Located at the edge of the Milky way galaxy. Expierence real Earth style pizza.';
    bodyParagraph.classList.add('body-paragraph');


    const footer = createAboutFooter();

    function createAboutFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('about-terminal');

    footer.innerHTML = `
        <div class="terminal-col">
            <h4>[ COMMS_CHANNEL ]</h4>
            <p>FREQ: 1-800-VOID-PIE</p>
            <p>PING: admin@ufopizza.io</p>
        </div>
        <div class="terminal-col">
            <h4>[ OP_CYCLES ]</h4>
            <p>0600 - 0000 // UTC</p>
            <p>DOCKING: 24/7 ACTIVE</p>
        </div>
        <div class="terminal-col">
            <h4>[ NAVIGATION ]</h4>
            <p>SECTOR 7G // BAY 94</p>
            <p>COORD: 51.5074 N, 0.1278 W</p>
        </div>
    `;
    return footer;
}
  

    AboutWrapper.appendChild(title);
    AboutWrapper.appendChild(ufoImg);
    AboutWrapper.appendChild(bodyParagraph);
    AboutWrapper.appendChild(footer);
    content.appendChild(AboutWrapper);
}