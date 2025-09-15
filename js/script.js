const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".grid-size-btn");

const containerSize = window
    .getComputedStyle(container)
    .getPropertyValue("max-width")
    .slice(0, -2);

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
    event.target.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)} ,${Math.floor(
        Math.random() * 256
    )})`;
});

function createGrid(size) {
    const gridPixels = size * size;

    for (let i = 0; i < gridPixels; i++) {
        const gridElement = document.createElement("div");

        gridElement.style.cssText = `width: ${
            containerSize / size
        }px; height: ${containerSize / size}px;`;

        container.appendChild(gridElement);
    }
}
