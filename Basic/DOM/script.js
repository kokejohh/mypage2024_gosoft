console.log("Hello external");

const h = document.getElementsByTagName("h1");
const hh = document.querySelector('h1');
console.log(h[0].innerHTML);
console.log(hh.innerHTML);

hh.innerHTML = '<strong>love me</strong>';
// hh.innerText = '<strong>love me</strong>';
let txt = document.createTextNode('<em>love you</em>');
document.create
hh.appendChild(txt);

const ul = document.querySelector("ul");
const li3 = ul.children.item(2); //const li3 = ul.children[2];
const thirdLink = li3.firstElementChild;
thirdLink.innerHTML = "Pitchakorn Thiprangsi";

const test = ul.getElementsByTagName("li");
console.log(test[0]);
console.log(test.item(0));

const lia = document.querySelectorAll('li a');
console.log(lia);

const liitem = document.querySelector('li.item');
console.log(liitem);

const ula = document.querySelector('#list a');
ula.href2 = 'https://www.ok.com';
ula.setAttribute('href2', 'https://www.koke.com');
console.log(ula);
console.log(ula.href2)
console.log(ula.getAttribute('href2'));

const btn = document.querySelector('button');
console.log(btn.classList);

btn.addEventListener('click', () => {
    btn.classList.add('invisible', 'love');
});