const container = document.querySelector('.container');
const containerSize = 800;

for (let i = 0; i < 1000; i++) {
    const gridElement = document.createElement('div');
    gridElement.style.cssText = (` width: 15px; 
                                   height: 15px; 
                                   border: 1px solid black;`);
    gridElement.classList.toggle('grid');
    container.appendChild(gridElement);
}

const gridElements = document.querySelectorAll('.grid');

gridElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'black';
    });
});