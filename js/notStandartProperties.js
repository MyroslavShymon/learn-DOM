let div = document.getElementById("comm2");

console.log(div.getAttribute("deflt"));
div.setAttribute("deflt", "новое значение");
console.log(div.getAttribute("deflt"));
console.log(div.hasAttribute("deflt"));
console.log(div);
div.removeAttribute("deflt");
console.log(div);

let flSkip = false;
for (let cell of document.querySelectorAll("[data-cell-red]")) {
  //if (!flSkip) cell.setAttribute("data-cell-red", "lightRed");
  if (!flSkip) cell.dataset.cellRed = "lightRed";
  flSkip = !flSkip;
}
