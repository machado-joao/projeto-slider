const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBackground = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = "transparent";
    });
};

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        resetBackground();
        slider.style.transform = `translateX(-${index * 800}px)`;
        slideNumber = index + 1;
        button.style.backgroundColor = "white";
    });
});

const getNextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
};

const getPrevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
};

const changeColor = () => {
    resetBackground();
    buttons[slideNumber - 1].style.backgroundColor = "white";
};

right.addEventListener("click", () => {
    slideNumber < length ? getNextSlide() : getFirstSlide();
    changeColor();
});

left.addEventListener("click", () => {
    slideNumber > 1 ? getPrevSlide() : getLastSlide();
    changeColor();
});
