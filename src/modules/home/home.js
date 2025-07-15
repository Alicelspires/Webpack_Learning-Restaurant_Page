import "../../styles/home/home.css";
import bg from '../../assets/img/bg-02.jpg'

export default function loadHome(){
    let body = document.querySelector('body')
    let content = document.querySelector('#content')
    let heroSection = document.createElement('div')

    body.style.backdropFilter = 'none'
    content.style.backdropFilter = 'none'
    body.style.backgroundImage = `url(${bg})`;
    heroSection.id = 'heroSection';

    heroSection.innerHTML = `
        <span>
            <p>Welcome to</p>
            <h1>Odin's Table</h1>
        </span>
        <span class="author">
            <a href="https://github.com/Alicelspires">by Alice Silva</a>
        </span>
    `;

    content.appendChild(heroSection)
}