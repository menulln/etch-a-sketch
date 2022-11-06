const container = document.querySelector('.container');
const containerSize = 600;
const buttonSquares = document.querySelector('button-squares');

renderGrid();

buttonSquares.addEventListener('click', () => {
    const squaresPerSide = +prompt('Set number of squares per side. (1-100)');
});

function renderGrid(squaresPerSide = 24) {
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
    
    gridElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'black';
        });
    });
}

