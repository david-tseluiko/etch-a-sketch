const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".grid-size-btn");

createGrid(16);

gridSizeButton.addEventListener("click", () => {
    container.textContent = "";

    let gridSize;

    do {
        gridSize = +prompt("Enter number of squares per side");
    } while (isNaN(gridSize) || gridSize < 0 || gridSize > 100);

    createGrid(gridSize);
});

container.addEventListener("mouseover", (event) => {
    event.target.classList.add("colored");
});

function createGrid(size) {
    const gridPixels = size * size;

    for (let i = 0; i < gridPixels; i++) {
        const gridElement = document.createElement("div");
        gridElement.style.cssText = `width: ${700 / size}px; height: ${
            700 / size
        }px;`;

        container.appendChild(gridElement);
    }
}
