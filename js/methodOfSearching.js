let ul = document.querySelector(".ul");
console.log(ul.querySelectorAll("li"));

let list = document.querySelectorAll("ul.stars-list > li");

for (let item of list) {
  if (item.matches(".star")) console.log(item);
}
