const card = document.querySelectorAll('.cell');
const front = document.querySelectorAll('.front');
let score = document.querySelector('.score span');

shuffleImage();
clicked();

function shuffleImage() {

    card.forEach(c => {

        const num = [...Array(card.length).keys()];
        const random = Math.floor(Math.random()*card.length);

        c.style.order = num[random];
        // console.log(num[random]);
    });
}

function clicked() {

    for(let i = 0; i < card.length; i++) {

        card[i].addEventListener('click', ()=> {

            front[i].classList.add('flip');
            const flippedCards = document.querySelectorAll('.flip');

            if (flippedCards.length == 2) {

                matched(flippedCards[0], flippedCards[1]);
            }
        });
    }
}

function matched(cardOne, cardTwo) {

    if (cardOne.dataset.index == cardTwo.dataset.index) {

        score.innerHTML = parseInt(score.innerHTML) + 1;

        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');

        cardOne.classList.add('matched');
        cardTwo.classList.add('matched'); 

    } else {

        setTimeout(() => {
            cardOne.classList.remove('flip');
            cardTwo.classList.remove('flip'); 
        }, 1000);
    }
}