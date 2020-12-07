let div = document.createElement("div");
div.className = "msg";
div.innerHTML = "Важная информация!";

let list = document.querySelector(".ul_2");
list.before("before");
list.after("after");
let li_1 = document.createElement("li");
li_1.innerHTML = "первый элемент";
list.prepend(li_1);
let li_2 = document.createElement("li");
li_2.innerHTML = "последний элемент";
list.append(li_2);

let li = document.querySelector(".li-first");
list.append(li);

let textNode = document.createTextNode("Текстовый элемент");
document.body.append(textNode);

list.insertAdjacentHTML("beforebegin", "<br>Список планет<hr>");
list.insertAdjacentHTML("afterend", "<hr>Конец списка<br>");
list.insertAdjacentHTML("afterbegin", "<li>Солнце");
list.insertAdjacentHTML("beforeend", "<li>Марс");

document.querySelector(".btn1").addEventListener("click", function () {
  setInterval(function () {
    let li = document.querySelector(".ul_2 > li:last-child");
    if (li === null) {
      clearInterval(idRemove);
      console.log("Список удален");
    } else li.remove();
  }, 500);
});
let t = document.querySelector(".table2");
let r = document.querySelector(".table2>tbody>tr:last-child");
let row = r.cloneNode(true);
row.firstChild.innerHTML = "Венера";
t.append(row);
