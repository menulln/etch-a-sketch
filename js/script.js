const container = document.querySelector('.container');
const containerSize = 600;
const buttonSquares = document.querySelector('.button-squares');

let currentFeature = 'pen';
let transparency = 0;

renderGrid();
attachListeners();

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyE':
            currentFeature = 'eraser';
            attachListeners();
            break;
        case 'KeyR':
            currentFeature = 'random';
            attachListeners();
            break;
        case 'KeyT':
            currentFeature = 'transparency';
            attachListeners();
            break;
        case 'KeyP':
            currentFeature = 'pen';
            attachListeners();
            break;
    }
});

buttonSquares.addEventListener('click', () => {
    let squaresPerSide = +prompt('Set number of squares per side. (1-100)');
    while (squaresPerSide > 100 || squaresPerSide <= 0) {
        squaresPerSide = +prompt('Set number of squares per side. (1-100)');
    }
    renderGrid(squaresPerSide);
});

function renderGrid(squaresPerSide = 24) {
    container.textContent = '';
    for (let i = 0; i < squaresPerSide; i++) { 
        for (let j = 0; j < squaresPerSide; j++) {
            const gridElement = document.createElement('div');
            gridElement.style.cssText = (` width: ${(containerSize / squaresPerSide) - 2}px; 
                                        height: ${(containerSize / squaresPerSide) - 2}px; 
                                        border: 1px solid black;`);
            gridElement.classList.toggle('grid');
            container.appendChild(gridElement);
        }
    }
}

function attachListeners() {
    const gridElements = document.querySelectorAll('.grid');

    switch (currentFeature) {
        case 'pen':
            gridElements.forEach( (element) => {
                element.addEventListener('mouseover', featurePen);
            });
            break;
        case 'eraser':
            gridElements.forEach( (element) => {
                element.addEventListener('mouseover', featureEraser);
            });
            break;
        case 'transparency':
            gridElements.forEach( (element) => {
                element.addEventListener('mouseover', featureTransparency);
            });
            break;
        case 'random':
            gridElements.forEach( (element) => {
                element.addEventListener('mouseover', featureRandom);
            });
            break;    
        default: 
            gridElements.forEach( (element) => {
                element.addEventListener('mouseover', featurePen);
            });
            break;
    }
}

function randomRgb() {
    let rgbString = 'rgb(';
    for (let i = 0; i < 3; i++) {
        const rgbValue = Math.floor(Math.random() * 254);
        if (i < 2) {
            rgbString += `${rgbValue}, `;
        } else {
            rgbString += `${rgbValue})`;
        }
    }
    return rgbString;
}

function featurePen(e) {
    e.target.style.backgroundColor = 'black';
}

function featureEraser (e) {
    e.target.style.backgroundColor = 'white';
}

function featureRandom(e) {
    e.target.style.backgroundColor = randomRgb();
}

function featureTransparency(e) {
    if (transparency < 1) {
        e.target.style.backgroundColor = `rgba(0, 0, 0, ${transparency})`;
        transparency += 0.1;
    } else {
        transparency = 0.1;
    }
}

