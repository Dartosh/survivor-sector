const pointers = document.querySelectorAll('.camp__point');
const pointersInfo = document.querySelectorAll('.camp__point-info');

pointers.forEach(
    (item, index) => { 
        item.addEventListener('mouseover', () => {
            pointersInfo[index].style.display = 'block';
            pointersInfo[index].style.animation = 'showing 0.2s linear forwards';
            item.style.animation = "none";
        })
    }
)

pointersInfo.forEach(
    (item, index) => { 
        item.addEventListener('mouseleave', () => {
            item.style.animation = 'disappearing 0.2s linear forwards'
            setTimeout(() => item.style.display = 'none', 200);
            pointers[index].style.animation = "pulse 2s infinite linear";
        })
    }
)