const cards = document.querySelectorAll('.cards__slider-line__card');
const nextButton = document.querySelector('#nextButton');
const prevButton = document.querySelector('#prevButton');
const plate = document.querySelector('#plate');
let count = 0;

// if (count == 0) {
//     prevButton.style.visibility = 'hidden';
// }

function nextCard() {
    if(count < 2) {
        // prevButton.style.visibility = 'visible';
        cards[count].style.display = 'none';
        cards[count+1].style.animation = 'showing 0.2s linear forwards';
        cards[count+1].style.display = 'flex';
        count++;
    } else {
        cards[count].style.display = 'none';
        cards[0].style.animation = 'showing 0.2s linear forwards';
        cards[0].style.display = 'flex';
        count = 0;
    }

    // if (count == 2) {
    //     nextButton.style.visibility = 'hidden';
    // }
}

function prevCard() {
    if(count > 0) {
        nextButton.style.visibility = 'visible';
        cards[count].style.display = 'none';
        cards[count-1].style.animation = 'showing 0.2s linear forwards';
        cards[count-1].style.display = 'flex';
        count--;
    } else {
        cards[count].style.display = 'none';
        cards[2].style.animation = 'showing 0.2s linear forwards';
        cards[2].style.display = 'flex';
        count = 2;
    }

    // if (count == 0) {
    //     prevButton.style.visibility = 'hidden';
    // }
}