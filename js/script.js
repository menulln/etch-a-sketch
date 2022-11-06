const container = document.querySelector('.container');
const containerSize = 600;
const buttonSquares = document.querySelector('.button-squares');

let penOn = true;
let eraseOn = false;
let transparencyOn = false;
let randomOn = false;

renderGrid();

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

    const gridElements = document.querySelectorAll('.grid');
    
    let transparency = 0.1;

    gridElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            if (transparency < 1) {
                element.style.backgroundColor = `rgba(0, 0, 0, ${transparency})`;
                transparency += 0.1;
            } else {
                transparency = 0.1;
            }
        });
    });
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
    console.log(rgbString)
    return rgbString;
}