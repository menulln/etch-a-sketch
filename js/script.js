const container = document.querySelector('.container');
const containerSize = 600;
const buttonSquares = document.querySelector('.button-squares');

let mouseDown = false;
let currentFeature = 'pen';
let transparency = 0;

renderGrid();
attachListeners();

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyE':
            document.body.innerHTML = document.body.innerHTML;
            currentFeature = 'eraser';
            attachListeners();
            break;
        case 'KeyR':
            document.body.innerHTML = document.body.innerHTML;
            currentFeature = 'random';
            attachListeners();
            break;
        case 'KeyT':
            document.body.innerHTML = document.body.innerHTML;
            currentFeature = 'transparency';
            attachListeners();
            break;
        case 'KeyP':
            document.body.innerHTML = document.body.innerHTML;
            currentFeature = 'pen';
            attachListeners();
            break;
    }
});

document.addEventListener('mousedown', () => mouseDown = true);
document.addEventListener('mouseup', () => mouseDown = false);

buttonSquares.addEventListener('click', () => {
    let squaresPerSide = +prompt('Set number of squares per side. (1-100)');
    while (squaresPerSide > 100 || squaresPerSide <= 0) {
        squaresPerSide = +prompt('Set number of squares per side. (1-100)');
    }
    renderGrid(squaresPerSide);
    attachListeners();
});

function renderGrid(squaresPerSide = 24) {
    container.textContent = '';
    for (let i = 0; i < squaresPerSide; i++) { 
        for (let j = 0; j < squaresPerSide; j++) {
            const gridElement = document.createElement('div');
            gridElement.style.cssText = (` width: ${(containerSize / squaresPerSide) - 2}px; 
                                        height: ${(containerSize / squaresPerSide) - 2}px; 
                                        border: 1px solid black;
                                        user-select: none;`);
            gridElement.setAttribute('draggable', 'false'); 
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
                element.addEventListener('mouseover', () => {
                    if (mouseDown) {
                        element.style.backgroundColor = 'black';
                    }
                });
            });
            break;
        case 'eraser':
            gridElements.forEach( (element) => {
                element.addEventListener('mouseover', () => {
                    if (mouseDown) {
                        element.style.backgroundColor = 'white';
                    }
                });
            });
            break;
        case 'transparency':
            gridElements.forEach( (element) => {
                element.addEventListener('mouseover', () => {                 
                    if (mouseDown) {
                        if (transparency < 1) {
                            element.style.backgroundColor = `rgba(0, 0, 0, ${transparency})`;
                            transparency += 0.1;
                        } else {
                            element.style.backgroundColor = `rgba(0, 0, 0, ${transparency})`;
                            transparency = 0.1;
                        }
                    }
                });
            });
            break;
        case 'random':
            gridElements.forEach( (element) => {
                element.addEventListener('mouseover', () => {
                    if (mouseDown) {
                        element.style.backgroundColor = randomRgb();
                    }
                });
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