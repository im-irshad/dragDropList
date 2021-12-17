let dDlist = document.getElementById("dragDropList");
let check = document.getElementById("check");

const data = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

const storeData = [];
let randomData = [];
let startIndex;
insertList();
// insert data to DOM
function insertList() {
  [...data]
    .map((v) => ({ value: v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .forEach((d, index) => {
      //console.log(d.value);
      const sData = document.createElement("li");
      sData.setAttribute("data-index", index);
      sData.innerHTML = `
      <span class="nr">${index + 1}</span>
      <div class="draggableDiv" draggable="true">
          <p class="">${d.value}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
   
    `;
      //<span class=nr>${index + 1}</span>
      //<div>${d.value}
      //</div>
      storeData.push(sData);
      dDlist.appendChild(sData);
    });

  storeData.map(() => {});
  addEventListeners();
}
function dragStart() {
  startIndex = +this.closest("li").getAttribute("data-index");
  //console.log(startIndex);
}
function dragLeave() {
  // console.log("dragleaver");
  this.classList.remove("over");
}
function dragEnter() {
  // console.log("dragenter");
  this.classList.remove("over");
}
function dragDrop() {
  const endIndex = +this.closest("li").getAttribute("data-index");
  // console.log(endIndex);
  replaceItems(startIndex, endIndex);
  this.classList.remove("over");
}
function dragOver(e) {
  // console.log("over");
  e.preventDefault();
}

function replaceItems(fromLi, toLi) {
  let firstLi = storeData[fromLi].querySelector(".draggableDiv");
  let secondLi = storeData[toLi].querySelector(".draggableDiv");
  // console.log(firstLi, secondLi);
  storeData[fromLi].appendChild(secondLi);
  storeData[toLi].appendChild(firstLi);
}

function compare() {
  storeData.forEach((sdata, index) => {
    let number = sdata.querySelector(".draggableDiv").innerText;
    if (number !== data[index]) {
      sdata.style.color = "red";
      //  console.log("wrong");
    } else {
      sdata.style.color = "white";
      // console.log("right");
    }
  });
}

function addEventListeners() {
  const divToDrag = document.querySelectorAll(".draggableDiv");
  const itemToDrag = document.querySelectorAll(".dragDropList li");

  divToDrag.forEach((drag) => {
    drag.addEventListener("dragstart", dragStart);
  });
  itemToDrag.forEach((dragItem) => {
    dragItem.addEventListener("dragleave", dragLeave);
    dragItem.addEventListener("dragenter", dragEnter);
    dragItem.addEventListener("drop", dragDrop);
    dragItem.addEventListener("dragover", dragOver);
  });
}

check.addEventListener("click", compare);
