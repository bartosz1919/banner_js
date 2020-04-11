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
let activeDot = 0;

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

let autoSlider = setInterval(changeSlide, time);

const userChoice = (e) => {
    clearInterval(autoSlider);

    activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    switch (e.target.id) {
        case "one":
            dots[0].classList.add('active');
            text.textContent = slideLst[0].text;
            hero.style.backgroundImage = `url(${slideLst[0].img})`;
            break;
        case "two":
            dots[1].classList.add('active');
            text.textContent = slideLst[1].text;
            hero.style.backgroundImage = `url(${slideLst[1].img})`;
            break;
        case "three":
            dots[2].classList.add('active');
            text.textContent = slideLst[2].text;
            hero.style.backgroundImage = `url(${slideLst[2].img})`;
            break;



    }

    autoSlider = setInterval(changeSlide, time);
}

const changeSlideKeyboard = (e) => {
    if (e.keyCode == "37" || e.keyCode == "39") {
        console.log('Działa');
        console.log(e.keyCode);
    }
}


window.addEventListener('keydown', changeSlideKeyboard)
dots.forEach(e => e.addEventListener('click', userChoice));