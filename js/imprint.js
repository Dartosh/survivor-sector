const imprint = document.querySelector('#imprint');
const plateFooter = document.querySelector('#footer-plate');


imprint.addEventListener('click', () => {
    if (plateFooter.style.visibility == 'hidden') {
        plateFooter.style.visibility = 'visible';
    } else {
        plateFooter.style.visibility = 'hidden';
    }
}, true);