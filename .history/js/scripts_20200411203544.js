const slideLst = [{
        img: "../img/image1.jpg",
        text: "Pierwszy tekst"
    },
    {
        img: "../img/image2.jpg",
        text: "Drugi tekst"
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
const activeDot = 0;

const changeDot = () => {
    activeDot = dots.findIndex(dot => dot.classList.contains('active'))
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}


const changeSlide = () => {
    active++;
    if (active === slideLst.length) {
        active = 0;
    }

    text.textContent = slideLst[active].text;
    hero.style.backgroundImage = `url(${slideLst[active].img})`;

    changeDot()
}

const userChoice = (e) => {
    activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    switch (e.target.id) {
        case "one":
            dots[1].classList.add('active');
            break;
        case "two":
            dots[2].classList.add('active');
            break;
        case "three":
            dots[3].classList.add('active');
            break;


    }


}

setInterval(changeSlide, time);

dots.forEach(e => e.addEventListener('click', userChoice));