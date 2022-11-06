const container = document.querySelector('.container');

for (let i = 0; i < 1000; i++) {
    const gridElement = document.createElement('div');
    gridElement.style.cssText = (` width: 15px; 
                                   height: 15px; 
                                   border-bottom: 1px solid black; 
                                   border-right: 1px solid black;`);
    gridElement.classList.toggle('grid');
    container.appendChild(gridElement);
}