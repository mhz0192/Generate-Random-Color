let btn = document.querySelector("button");

btn.addEventListener("click", function () {
let h3 = document.querySelector("h2");
let randomColor = getRandomColor();
h3.innerText = randomColor;
h3.style.color = randomColor;
btn.style.backgroundColor = randomColor;

let div = document.querySelector(".divv");
div.style.backgroundColor = randomColor;
div.style.color = "white";

let text = document.querySelector("h3");
text.innerText = "This is your new color"
text.style.paddingTop = "160px"
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}