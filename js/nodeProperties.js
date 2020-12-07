/*
    elem.nodeType == 1 для узлов-элементов;
    elem.nodeType == 3 для текстовых узлов;
    …
    elem.nodeType == 9 для объектов документа. */

console.log(document.body.nodeType);
let h1 = document.querySelector(".h1-nodeProperties");
h1.outerHTML = "<h2>Измененный <u>заголовок</u> из h1 в h2";
let msg = prompt("Ваш комментарий:", "");
comm.textContent = msg;
/*Если теперь пользователь вводит что-то вроде:

<script>Это мой вредоносный скрипт</script>

то в комментариях появится ровно такая строка вместе
 с тегами и никакого вреда сайту нанесено не будет.
  А вот, если бы мы использовали свойство innerHTML
  то теги бы были прописаны в структуру документа*/
let comm1 = document.getElementById("comm1");
comm1.hidden = true;
setInterval(() => (comm1.hidden = !comm1.hidden), 500);
