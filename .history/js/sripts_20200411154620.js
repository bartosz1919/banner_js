const slideLst = [{
        img: "img/image1.jpg",
        text: "Pierwszy tekst"
    },
    {
        img: "img/image2.jpg",
        text: "Drugitekst"
    },
    {
        img: "img/image3.jpg",
        text: "Trzeci tekst"
    }
]

const img = document.querySelector("img.slider");
const text = document.querySelector("h1.slider");

const time = "4000";

let active = 0;


const changeSlide = () => {
    active++;


}



setInterval(changeSlide, time);