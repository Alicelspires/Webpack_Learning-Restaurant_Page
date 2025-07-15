import "../../styles/about/about.css";
import bg1 from '../../assets/img/bg-01.jpg'
import bg2 from '../../assets/img/bg-02.jpg'

export default function loadAbout(){
    let content = document.querySelector('#content')
    let body = document.querySelector('body')
    let sectionAboutUs = document.createElement('section')

    body.style.backgroundImage = ''
    body.style.overflowY = 'visible'
    body.style.backgroundColor = '#161616'
    sectionAboutUs.classList.add('about-us')

    sectionAboutUs.innerHTML = `
        <div class="about-us-text">
            <h2>About us</h2>
            <p>Welcome to the Odin's table, your exclusive haven for lovers of sophisticated wines and beverages. Our restaurant was born out of a passion to offer unique experiences, blending refined flavors, excellent service, and a carefully curated selection of the world’s finest wines.<br>
            Here, we celebrate the art of enogastronomy. Our wine list is thoughtfully crafted to please all palates — from classic wine enthusiasts to adventurous explorers of new regions and varieties.<br>
            Our space is designed to provide comfort and elegance, ideal for romantic evenings, special celebrations, or simply unwinding after a long day. The team at Odin's Table is always ready to guide you on a sensory journey, helping you find the perfect wine to pair with your meal or simply to savor a moment of pleasure.<br>
            Come visit us and discover a world of aromas, flavors, and stories that only a fine wine can tell.</p>
            <span>
                <h3>Contact</h3>
                <p>Address: 123 Vineyard Street – Noble District, Sample City – NY </p>
                <p>Phone: (555) 987-6543</p>
                <h4>Opening Hours:</h4>
                <p>Monday to Friday: 5:00 PM – 12:00 AM</p>
                <p>Saturday: 12:00 PM – 12:00 AM</p>
                <p>Sunday: 12:00 PM – 10:00 PM</p>
            </span>
        </div>
        <div class="img-about-us">
            <img src="${bg1}">
            <img src="${bg2}">
        </div>
    `;
    content.appendChild(sectionAboutUs)
}