let mainContainer = document.querySelector("#container");



//New measures button and RGB button
function button(){
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = "New mesures ? I'm here to help you!";
    bottomContainer.appendChild(button);

    const rgbButton = document.createElement("button");
    rgbButton.classList.add("rgb");
    rgbButton.textContent = "RGB";
    bottomContainer.appendChild(rgbButton);

    // RGB color 
    rgbButton.addEventListener("click", () => {
        let square = document.querySelectorAll(".rows");
        square.forEach(squar => {
            squar.addEventListener("mouseover", () => {
                //squar.setAttribute("style", "background-color: red");
                squar.style.backgroundColor = randomColor();
            });
        });
    });

    // New measure button
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
            squar.setAttribute("style", "background-color: #a8adad");
        });
    });

}

const bottomContainer = document.createElement("div");
bottomContainer.classList.add("bottomContainer");
container.appendChild(bottomContainer);

button();
createGrid(16);





