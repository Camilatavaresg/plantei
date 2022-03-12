// active links decor



const linksMenu = document.querySelector('.links')
const linksMenuA = linksMenu.querySelectorAll('a');
const desktopMenu = document.querySelector('.desktop-menu');
const mobilemenu = document.querySelector('.mobile-menu')

checkScreen();

linksMenu.addEventListener('click', function (event) {
    linksMenuA.forEach(item => {
        item.classList.remove('active-link')
    });
    event.target.classList.add('active-link')
})

window.addEventListener('resize', checkScreen);

//Faqs 

const questionContainer = document.querySelectorAll('.question-container');

questionContainer.forEach(item => {
    item.addEventListener('click', function () {
        this.lastElementChild.classList.toggle('answer')
        this.classList.toggle('activecolor')
        const icon = this.firstElementChild;
        icon.classList.toggle('answer');
        icon.nextElementSibling.classList.toggle('answer')
    })
})


// contact form validation

const contactEmail = document.querySelector('#email');
const contactSubject = document.querySelector('#subject');
const contactMessage = document.querySelector('#message');
const contactButton = document.querySelector('#contact-button');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

contactButton.addEventListener('click', function () {
    if (!contactEmail.value.match(mailformat)) {
        alert('Por favor insira um email valido')
    } else if (contactSubject.value.length == 0) {
        alert('Por favor insira o assunto')
    } else if (contactMessage.value.length == 0) {
        alert('por favor insira sua mensagem')
    } else {
        alert('Mensagem enviada! Obrigada')
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
})

// subscribe validation 

const subscribeButton = document.querySelector('#subscribe')
const subscribeEmail = document.querySelector('#subscribe-email')

subscribeButton.addEventListener('click', function () {

    if (!subscribeEmail.value.match(mailformat)) {
        alert('favor inserir um email valido')
    } else {
        alert('Voce foi inscrito! Obrigado')
        subscribeEmail.value = '';
    }
})

//night/day mode 

const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const body = document.querySelector('body');
const menulogo = document.getElementById('menu-icon')
const mobileLinks = document.querySelectorAll('.link-mobile')

moon.addEventListener('click', function () {
    body.classList.add('night-mode');
    this.nextElementSibling.classList.remove('dont-show')
    this.classList.add('dont-show')
    menulogo.style.color = "#e6e3e3"
    mobileLinks.forEach(element => {
        element.style.color = "#e6e3e3"
    })
})

sun.addEventListener('click', function () {
    body.classList.remove('night-mode');
    this.previousElementSibling.classList.remove('dont-show')
    this.classList.add('dont-show')
    menulogo.style.color = "black"
    mobileLinks.forEach(element => {
        element.style.color = "black"
    })
})

//element to scroll up

const arrowUp = document.querySelector('.arrow-up')

window.addEventListener('scroll', function () {
    const metadeWindows = window.innerHeight * 0.5;
    if (window.scrollY >= metadeWindows) {
        arrowUp.classList.remove('dont-show')
    } else {
        arrowUp.classList.add('dont-show')
    }
})

arrowUp.addEventListener('click', function () {
    window.scrollTo(0, 0);
})


// show more content when scrolling 

const sections = document.querySelectorAll('.js-scroll');

window.addEventListener('scroll', function () {
    const metadeWindows = window.innerHeight * 0.75;

    sections.forEach((item) => {
        const heightItem = item.getBoundingClientRect().top - metadeWindows;
        if (heightItem < 0) {
            item.classList.add('ativo')
        } 
    })
})

function checkScreen() {
    const windowWidth = window.innerWidth;
    const firstImage = document.getElementById('first-image');
    const secondImage = document.getElementById('second-img');
    const socialMedia = document.querySelector('.pic-container');
    if (windowWidth <= 900) {
        firstImage.classList.remove('inactive-pic');
        secondImage.classList.add('inactive-pic');
        socialMedia.classList.add('inactive-pic')
        desktopMenu.classList.add('inactive-pic');
        mobilemenu.classList.remove('inactive-pic');
    } else {
        firstImage.classList.add('inactive-pic');
        secondImage.classList.remove('inactive-pic');
        socialMedia.classList.remove('inactive-pic');
        desktopMenu.classList.remove('inactive-pic');
        mobilemenu.classList.add('inactive-pic');
    }
    
}

menulogo.addEventListener('click', function () {
    const mobilelinks = document.querySelector('.mobile-links')
    mobilelinks.classList.toggle('inactive-pic')
})