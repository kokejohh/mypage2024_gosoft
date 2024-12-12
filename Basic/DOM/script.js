console.log("Hello external");

const h = document.getElementsByTagName("h1");
const hh = document.querySelector('h1');
console.log(h[0].innerHTML);
console.log(hh.innerHTML);

const ul = document.querySelector("ul");
const li3 = ul.children.item(2); //const li3 = ul.children[2];
const thirdLink = li3.firstElementChild;
thirdLink.innerHTML = "Pitchakorn Thiprangsi";

const test = ul.getElementsByTagName("li");
console.log(test[0]);
console.log(test.item(0));