let html = document.documentElement;
let body = document.body;
let head = document.head;

console.log(html, body, head);

let arr = Array.from(document.body.childNodes);
arr.forEach((elem) => console.log(elem));

let first = html.firstChild;
let last = html.lastChild;

console.log(first);
console.log(last);
console.log(html.hasChildNodes());
console.log("////////////////////////////////////////////");

for (let child of document.body.children) {
  console.log(child);
}
console.log(document.head.nextElementSibling);
console.log(document.body.previousElementSibling);
console.log(document.body.parentNode);

let table = document.querySelector("#table_digs");
console.log(table.rows[0].cells[1].innerHTML);
/*
    table.rows – коллекция строк <tr> таблицы;
    table.caption/tHead/tFoot – ссылки на элементы таблицы <caption>, <thead>, <tfoot>;
    table.tBodies – коллекция элементов таблицы <tbody> (по спецификации их может быть больше одного). 

Объекты tr имеют такие свойства:

    tr.cells – коллекция <td> и <th> ячеек, находящихся внутри строки <tr>;
    tr.sectionRowIndex – номер строки <tr> в текущей секции <thead>/<tbody>/<tfoot>;
    tr.rowIndex – номер строки <tr> в таблице (включая все строки таблицы). 

И объект td:

    td.cellIndex – номер ячейки в строке <tr>. 
*/
