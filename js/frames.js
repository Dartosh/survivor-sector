const frame = document.querySelector('#frame');
const mainpage = document.querySelector('#mainpage');
const mainpageImg = document.querySelector('#mainpage-img');



if (document.body.clientWidth <= 1700) {
    console.log(mainpageImg.src);
    mainpageImg.src =  './assets/background/mainpage-background.png';
    console.log(mainpageImg.src);
}

if (document.body.clientWidth >= 1700) {
    frame.style.display = 'block';
    mainpageImg.src =  './assets/background/main-background.png';
    
        mainpageImg.style.removeProperty('object-fit');
    mainpage.style.height = '960px';
    
    frame.style.marginTop = '0';
} else {
    frame.style.display = 'none';
    
    mainpageImg.objectFit = 'contain';
    mainpageImg.src =  './assets/background/mainpage-background.png';
    frame.style.marginTop = '0';
}

const resize = () => {
    if (document.body.clientWidth >= 1700) {
        frame.style.display = 'block';
        mainpageImg.src =  './assets/background/main-background.png';
        mainpageImg.style.removeProperty('object-fit');
        mainpage.style.height = '960px';
        frame.style.marginTop = '0';
    } else {
        frame.style.display = 'none';
        mainpageImg.objectFit = 'contain';
        mainpage.style.removeProperty('height');
        mainpageImg.src =  './assets/background/mainpage-background.png';
        frame.style.marginTop = '0';
    }
}

window.addEventListener('resize', resize);