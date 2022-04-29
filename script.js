let gridRow = 16;

const container = document.querySelector("#container");

// create measure button and OnClick event 
const button = document.createElement("button");
button.classList.add("btn");
button.textContent = "New mesures ? I'm here to help you!";
container.appendChild(button);

button.addEventListener("click", () => {
    
    
});

// create a function that removes the old grid and create a new one



let containerSecond = document.createElement("div");
containerSecond.classList.add("containerSecond");
container.appendChild(containerSecond);

grid(gridRow);


function grid(squareNumber){
    for(let r = 0; r < squareNumber; r++){
        let row = document.createElement("div");
        containerSecond.appendChild(row).classList.add("row");
        for (i = 0; i < squareNumber; i++){
            let collum = document.createElement("div");
            row.appendChild(collum).classList.add("collum");
        }
    }
}

let square = document.querySelectorAll(".collum");
square.forEach(squar =>{
    squar.addEventListener("mouseover", () => {
        squar.setAttribute("style", "background-color: red;");
    });
});







