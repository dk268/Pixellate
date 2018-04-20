let theTable = document.querySelector("table");
function makeRow(num) {
  let tRow = document.createElement("tr")
  theTable.appendChild(tRow);
  let tableKids = [...theTable.children];
  for (let i = 0; i < num; i++) {
    let td = document.createElement("td")
    tRow.appendChild(td);
  }
}
let currentColor = "red";

let addRowButton = document.querySelector("#add-row");
addRowButton.addEventListener("click", () => makeRow(20));

cells = [...document.querySelectorAll("td")];

theTable.addEventListener("dblclick", (event) => {
  if (event.target.matches("td")) {
    event.target.classList = '';
  }
});

let selectColumn = document.querySelector("#color-picker");

selectColumn.addEventListener("change", (event) => {
  currentColor = event.target.value;
})

let theTableWrapper = document.querySelector("#tableWrapper");
let theBody = document.querySelector("body");



function removeRow () {
  theTable.removeChild(theTable.lastChild);
}



theTable.addEventListener("mouseover", (event) => {
  if (event.buttons === 1 && event.target.matches("td")) {
    event.target.classList = '';
    event.target.classList.add(currentColor);
  }
});

let executionSelector = document.querySelector("#action-picker");

let currentSelection = "clear-grid";


executionSelector.addEventListener("change", (event) => {
  currentSelection = event.target.value;
});

let executeButton = document.querySelector("executor");

theTable.addEventListener("click", (event) => {
  if (event.target.matches("td")) {
    event.target.classList = '';
    event.target.classList.add(currentColor);
  }
});

// executeButton.addEventListener("click", function(event) {
//   if (currentSelection == "clear-grid") {
//     cells.classList = '';
//   }
//   if (currentSelection == "monocolor") {
//     cells.classList.add(currentColor);
//   }
//   if (currentSelection == "fill-empty");
// });


// theTable.addEventListener("alt")

// theTable.addEventListener("dblclick", (event) => {
//   // if (event.target.matches("td"))event.target.style.backgroundColor = "black";
//   if (event.target.matches(".blue")) {
//     event.target.classList.remove("blue");
// });


// theBody.addEventListener("mouseleave", (event) => {
//   mouseDown = false;
// });

// let mouseDown = false;
// theTable.addEventListener("mousedown", (event) => {
//   if (event.target.matches("td")) {
//     event.target.classList = '';
//     event.target.classList.add(currentColor);
//     mouseDown = true;
//   }
// });

// theTable.addEventListener("mouseup", (event) => {
//   mouseDown = false;
// });
// theTable.addEventListener("mouseover", (event) => {
//   if (event.target.matches("td") && mouseDown===true) {
//     event.target.classList='';
//     event.target.classList.add(currentColor);
//   }
// });
