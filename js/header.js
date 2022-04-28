const header = document.querySelector('header');
const buttonPopUp = document.querySelector('#pop-up-button');
const navLink = document.querySelectorAll('.nav-link');
const nav = document.querySelector('#nav');
const contactsHeader = document.querySelector('#contacts-header');

// buttonPopUp.addEventListener('click', () => {
//     buttonPopUp;
// })

if (document.body.clientWidth <= 768) {
    contactsHeader.style.display = 'none';
    header.style.alignItems = 'flex-start'
    buttonPopUp.style.display = 'block';
    nav.style.display = 'none';
    nav.style.flexWrap = 'wrap';
    nav.style.width = '100%';
    for (link of navLink) {
        link.style.width = '100%';
    }
}

const openNav = () => {
    if (nav.style.display == 'none') {
        nav.style.display = 'flex'
    } else {
        nav.style.display = 'none'
    }
}

const resizeHeader = () => {
    if (document.body.clientWidth <= 768) {
        contactsHeader.style.display = 'none';
        header.style.alignItems = 'flex-start'
        buttonPopUp.style.display = 'block';
        nav.style.display = 'none';
        nav.style.flexWrap = 'wrap';
        nav.style.width = '100%';
        for (link of navLink) {
            link.style.width = '100%';
        }
    } else {
        contactsHeader.style.display = 'block';
        header.style.alignItems = 'center'
        buttonPopUp.style.display = 'none';
        nav.style.display = 'flex';
        nav.style.flexWrap = 'nowrap';
        nav.style.removeProperty('width');
        for (link of navLink) {
            link.style.removeProperty('width');
        }
    }
}

window.addEventListener('resize', resizeHeader);
buttonPopUp.addEventListener('click', openNav)