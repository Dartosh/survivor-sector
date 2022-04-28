const camp = document.querySelector('#camp');

// if (scrollY > ((100 / mainpage.clientHeight) * 30)) {
//     camp.scrollIntoView();
// }

const scrollIntoCamp = () => {
    window.removeEventListener('scroll', scrollIntoCamp)
    if (scrollY > ((100 / mainpage.clientHeight) * 30)) {
        camp.scrollIntoView();
    }
    window.addEventListener('scroll', scrollIntoCamp)
}

window.addEventListener('scroll', scrollIntoCamp)