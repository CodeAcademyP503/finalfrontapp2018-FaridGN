let slider = document.querySelector(".slider");
let items = document.querySelectorAll(".slide_item");
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let mainWidth = slider.parentElement.clientWidth

function initial() {
    slider.style.width = (mainWidth * items.length) + "px";
    for (let item of items) {
        item.style.width = mainWidth + "px";
    }
}

nextButton.addEventListener("click", function(){
        // showSlides();
});

initial();

let interval;

let currentimg = 0;
let position = 0;
function nextSlide() {
    position += mainWidth;
    let count = 0;
     interval = setInterval(function () {
        slider.style.marginLeft = -position + "px";
        position++;
        count++;
        currentimg++
        if (currentimg >= items.length) {
            slider.style.marginLeft = "0px";
            currentimg = 0;
            position = 0;
        }
        for (let item of items) {
            if (count += mainWidth) {
                clearInterval(interval);
            }
        }
    }, 4000 / mainWidth);
    setTimeout(nextSlide, 3000)
}

setTimeout(nextSlide, 3000)


let slider02 = document.querySelector(".slider02");
let things = document.querySelectorAll(".slide02_item");
let mainWidth02 = slider02.parentElement.clientWidth

function initial02() {
    slider02.style.width = (mainWidth02 * things.length) + "px";
    for (let item of things) {
        item.style.width = mainWidth02 + "px";
    }
}


initial02();

let interval02;

let currentimg02 = 0;
let position02 = 0;
function nextSlide02() {
    position02 += mainWidth02;
    let count02 = 0;
     interval02 = setInterval(function () {
        slider02.style.marginLeft = -position02 + "px";
        position02++;
        count02++;
        currentimg02++
        if (currentimg02 >= things.length) {
            slider02.style.marginLeft = "0px";
            currentimg02 = 0;
            position02 = 0;
        }
        for (let item of things) {
            if (count02 += mainWidth02) {
                clearInterval(interval02);
            }
        }
    }, 4000 / mainWidth02);
    setTimeout(nextSlide02, 3000)
}

setTimeout(nextSlide02, 3000)


let slider03 = document.querySelector(".slider03");
let component = document.querySelectorAll(".slide03_item");
let mainWidth03 = slider03.parentElement.clientWidth

function initial03() {
    slider03.style.width = (mainWidth03 * component.length) + "px";
    for (let item of component) {
        item.style.width = mainWidth03 + "px";
    }
}


initial03();

let interval03;

let currentimg03 = 0;
let position03 = 0;
function nextSlide03() {
    position03 += mainWidth03;
    let count03 = 0;
     interval03 = setInterval(function () {
        slider03.style.marginLeft = -position03 + "px";
        position03++;
        count03++;
        currentimg03++
        if (currentimg03 >= component.length) {
            slider03.style.marginLeft = "0px";
            currentimg03 = 0;
            position03 = 0;
        }
        for (let item of component) {
            if (count03 += mainWidth03) {
                clearInterval(interval03);
            }
        }
    }, 4000 / mainWidth03);
    setTimeout(nextSlide03, 3000)
}

setTimeout(nextSlide03, 3000);

document.getElementById("dash01").onclick = function(){
    location.href = "index.html";
}

document.getElementById("dash02").onclick = function(){
    location.href = "dash2.html";
}
