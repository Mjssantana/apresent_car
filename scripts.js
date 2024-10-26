let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");

let list = container.querySelector(".list");

let itens = container.querySelectorAll(".list .item");
let indicators = document.querySelector(".indicators");
let dot = indicators.querySelectorAll("ul li");

let active = 0;
let firstPosition = 0;
let lastPosition = itens.length - 1;

function setSlider(){
    let itemOld = container.querySelector(".list .item.active");
    itemOld.classList.remove("active");
    dotOld = indicators.querySelector("ul li.active");
    dotOld.classList.remove("active");

}
function addActive(){
    itens[active].classList.add("active");
    dot[active].classList.add("active");
    indicators.querySelector('.number').innerHTML = '0' + (active + 1);
}
nextButton.onclick = () => {
    setSlider()
    active = active + 1 >lastPosition ? 0 : active +1
    list.style.setProperty("--calculation", 1)
    addActive()
}

prevButton.onclick = () => {
    setSlider()
    active = active - 1 < firstPosition ? lastPosition : active -1
    list.style.setProperty("--calculation", -1)
    addActive()
}