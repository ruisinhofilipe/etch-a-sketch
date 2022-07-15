let mainContainer = document.querySelector("#container");

//New measures button and Rainbow button
function button(){

    // New measures button creation
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = "New grid";
    bottomContainer.appendChild(button);

    // Rainbow button creation
    const rainbowButton = document.createElement("button");
    rainbowButton.classList.add("rainbow");
    rainbowButton.textContent = "Rainbow mode";
    bottomContainer.appendChild(rainbowButton);

    // Default color button creation
    const defaultButton = document.createElement("button");
    defaultButton.classList.add("defaultColor");
    defaultButton.textContent = "Normal mode";
    bottomContainer.appendChild(defaultButton);


    // Restart button creation
    const restartButton = document.createElement("button");
    restartButton.classList.add("restartButton");
    restartButton.textContent = "Restart grid";
    bottomContainer.appendChild(restartButton);
    

    // New measures button
    button.addEventListener("click", () => {
        let row = document.querySelectorAll(".rows");
        row.forEach(e => e.remove());
        let column = document.querySelectorAll(".columns");
        column.forEach(e => e.remove());
        let i;
        do{
           i = prompt("Number of cells (between 2-100): ");
        }while(i < 2 || i > 100);
        let numberCells = i;
        createGrid(numberCells);
    }); 

    // Rainbow button 
    rainbowButton.addEventListener("click", () => {
        let square = document.querySelectorAll(".rows");
        square.forEach(squar => {
            squar.addEventListener("mouseover", () => {
                squar.style.backgroundColor = randomColor();
            });
        });
    });

    // Default color button
    defaultButton.addEventListener("click", () => {
        let square = document.querySelectorAll(".rows");
        square.forEach(squar => {
            squar.addEventListener("mouseover", () => {
                squar.style.backgroundColor = "#a8adad";
            });
        });
    });

    // Restart button 
    restartButton.addEventListener("click", () => {
        location.reload();
    }); 
}

function randomColor(){
    let elements = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += elements[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Grid container creation
let gridContainer = document.createElement("div");
mainContainer.appendChild(gridContainer).classList.add("gridContainer");

//Grid creation
function createGrid(size){
    for(let c = 0; c < size; c++){
        let columns = document.createElement("div");
        gridContainer.appendChild(columns).classList.add("columns");
            for (let r = 0; r < size; r++){
                let rows = document.createElement("div");
                columns.appendChild(rows).classList.add("rows");
            }
    }
    let square = document.querySelectorAll(".rows");
    square.forEach(squar => {
        squar.addEventListener("mouseover", () => {
            squar.style.backgroundColor = "#a8adad";
        });
    });
}

const bottomContainer = document.createElement("div");
bottomContainer.classList.add("bottomContainer");
container.appendChild(bottomContainer);

button();
createGrid(16);





