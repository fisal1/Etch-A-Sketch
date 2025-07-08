(function(document, window, undefined){

    "use strict"

    function createGrid(number) {
        const gridContainer = document.querySelector(".grid-container");
        gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        for (let i = 1; i <= number*number; i++) {
            let div = document.createElement("div");
            div.classList.add("grid-box")
            gridContainer.appendChild(div);
        }
        document.querySelector(".grid-dimensions").textContent = `${number}x${number}`;
    }

    function changeColor(event){
        event.target.style.backgroundColor = "black";
    }
    function rgbcolor2(event){
        
         event.target.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

    function resetGrid(){
        let num = prompt("Please enter grid size less than or equal to 100:");
        if (num === undefined || num === null || num === "") {
            return;
        }


        while (num > 100){
            num = prompt("Number too big! Please enter grid size less than or equal to 100:");
        }

        const gridContainer = document.querySelector(".grid-container");
        while (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        createGrid(num);
        let gridBoxList = document.querySelectorAll(".grid-box");
        gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});
    }

    function clearGrid(){
        let gridBoxList = document.querySelectorAll(".grid-box");
        gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = null});
    }
let gridNumber = 16;
    createGrid(gridNumber);
    
    let gridBoxList1 = document.querySelectorAll(".grid-box");
    gridBoxList1.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});

    
    createGrid(gridNumber);
    function rgbcolor1(){
        clearGrid();
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", rgbcolor2)});
    }

    const clearButton = document.querySelector(".clear-button");
    const resetButton = document.querySelector(".reset-button");
    const rgbcolor = document.querySelector(".rgb");

    clearButton.addEventListener("click", clearGrid);
    resetButton.addEventListener("click", resetGrid);
    rgbcolor.addEventListener("click",rgbcolor1);
})(document, window) 