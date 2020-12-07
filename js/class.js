const cls = document.querySelector(".msg1");
console.log(cls.className);
cls.classList.remove("ex1");
console.log(cls.className);
cls.classList.add("ex2");
console.log(cls.className);

let coordY = 0;
let idMove = setInterval(function () {
  coordY += 5;
  cls.style.top = coordY + "px";
}, 50);

setTimeout(() => clearInterval(idMove), 3000);
let objStyles = getComputedStyle(cls);
console.log(objStyles);
