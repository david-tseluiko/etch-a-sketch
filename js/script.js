const container = document.querySelector(".container");

createGrid(16);

container.addEventListener("mouseover", (event) => {
    event.target.classList.add('colored');
});

function createGrid(size) {
    const gridPixels = size * size;

    for (let i = 0; i < gridPixels; i++) {
        const gridElement = document.createElement("div");
        container.appendChild(gridElement);
    }
}
