let mainContainer = document.querySelector("#container");

//New measures button and OnClick event 
function button(){
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = "New mesures ? I'm here to help you!";
    container.appendChild(button);
    
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

button();
createGrid(16);





