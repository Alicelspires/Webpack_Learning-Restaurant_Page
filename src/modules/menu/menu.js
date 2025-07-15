import "../../styles/menu/menu.css";
import drinksData from '../../assets/data/drinks.json';
import bg from '../../assets/img/bg-02.jpg'

export default function loadMenu(){
    let content = document.querySelector('#content')
    let body = document.querySelector('body')
    let sectionContainer = document.createElement('section')

    content.style.backdropFilter = 'blur(4px)'
    body.style.overflowY = 'visible'
    body.style.backgroundRepeat = 'repeat'
    body.style.backgroundImage = `url('${bg}')`
    sectionContainer.classList.add('menu-container');

    Object.keys(drinksData).forEach((category) => {
        let sectionMenu = document.createElement('section')
        let drinks = drinksData[category]
        let item = '';
   
        sectionMenu.classList.add('menu-section')

        drinks.forEach((info) => {
            item += `
                <div class="menu-item">
                    <div class="item-info">
                        <h3>${info.name}e</h3>
                        <p>${info.description}</p>
                    </div>
                    <div class="prices">
                        <span>$${info.glass.toFixed(2)}</span>
                        <span>$${info.bottle.toFixed(2)}</span>
                    </div>
                </div>
            `
        })

        sectionMenu.innerHTML += `
            <div class="section-header">
                <h2>${category}</h2>
                <div class="price-labels">
                    <span>Glass</span>
                    <span>Bottle</span>
                </div>
            </div>
            ${item}
        `
        sectionContainer.appendChild(sectionMenu)
    })
    content.appendChild(sectionContainer)

}
