const { ipcRenderer } = require('electron');

const picker = document.querySelector('#colorPicker');
const box = document.querySelector('#colorBox');
const hexVal = document.querySelector('#hexVal');
const palettesDiv = document.querySelector('#palettes');

picker.addEventListener('input', e => {
    const val = e.target.value;
    box.style.backgroundColor = val;
    hexVal.textContent = val;
})

async function loadPopularPalettes() {
    const res = await fetch('http://www.colourlovers.com/api/palettes/top');
    const text = await res.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, 'application/xml');

    const palettes = xmlDoc.getElementsByTagName('palette');

    palettesDiv.innerHTML = '<h2>Popular Palettes</h2>';
    Array.from(palettes).forEach(palette => {
        const title = document.createElement('h3');
        title.textContent = palette.getElementsByTagName('title')[0].textContent;

        const paletteDiv = document.createElement('div');
        paletteDiv.className = 'palette';

        const colors = palette.getElementsByTagName('hex');
        Array.from(colors).forEach(color => {
            const hex = color.textContent;
            const swatch = document.createElement('div');
            swatch.className = 'swatch';
            swatch.style.backgroundColor = "#" + hex;
            swatch.title = '#' + hex;
            swatch.onclick = () => {
            picker.value = '#' + hex;
            picker.dispatchEvent(new Event('input'));
        }
        paletteDiv.appendChild(swatch);
    })
    palettesDiv.appendChild(title);
    palettesDiv.appendChild(paletteDiv);
 })
}

document.getElementById('loadPalettesBtn').addEventListener('click', loadPopularPalettes)

document.querySelector('.close-btn').addEventListener('click', () => {
    ipcRenderer.send('close-app');
})

box.addEventListener('click', () => {
    const hexValue = hexVal.textContent;
    navigator.clipboard.writeText(hexValue)
    .then(() => {
        alert(`Copied ${hexValue} to clipboard!`);
    })
    .catch(err => {
        console.error('Failed to copy: ', err);
    })
})



