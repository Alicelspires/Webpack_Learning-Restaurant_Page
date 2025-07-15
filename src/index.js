import './styles/main.css'
import loadHome from './modules/home/home.js';
import loadMenu from './modules/menu/menu.js';
import loadAbout from './modules/about/about.js';

// import odinImage from "./odin.png";

function cleanContent(){
    document.querySelector('#content').textContent = '';
}

function loadPages(){
    let home = document.querySelector('#home');
    let menu = document.querySelector('#menu');
    let about = document.querySelector('#about');


    home.addEventListener('click', () => {
        cleanContent()
        loadHome();
    })

    menu.addEventListener('click', () => {
        cleanContent()
        loadMenu();
    })

    about.addEventListener('click', () => {
        cleanContent()
        loadAbout();
    })
}

// Default
loadHome()
loadPages()