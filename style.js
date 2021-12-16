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
      console.log(d.value);
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
  console.log("dragstart");
}
function dragLeave() {
  console.log("dragleaver");
}
function dragEnter() {
  console.log("dragenter");
}
function dragDrop() {
  console.log("dragdrop");
}
function dragOver() {
  console.log("over");
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
