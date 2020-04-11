const slideLst = [{
        img: "../img/image1.jpg",
        text: "Pierwszy tekst"
    },
    {
        img: "../img/image2.jpg",
        text: "Drugitekst"
    },
    {
        img: "../img/image3.jpg",
        text: "Trzeci tekst"
    }
]
const hero = document.querySelector("div.hero")
const text = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

const time = "4000";

let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'))
    dots[activeDot].classList.remove('active');
}


const changeSlide = () => {
    active++;
    if (active === slideLst.length) {
        active = 0;
    }

    text.textContent = slideLst[active].text;
    hero.style.backgroundImage = `url(${slideLst[active].img})`;

    console.log("Działa");
    changeDot()
}



setInterval(changeSlide, time);