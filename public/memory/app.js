const cards = [
    {
        name: '차1',
        img: 'img/앞면 카드.jpg'
    },
    {
        name: '차1',
        img: 'img/앞면 카드.jpg'
    },
    {
        name: '차2',
        img: 'img/앞면 카드 2.jpg'
    },
    {
        name: '차2',
        img: 'img/앞면 카드 2.jpg'
    },
    {
        name: '차3',
        img: 'img/앞면 카드 3.jpg'
    },
    {
        name: '차3',
        img: 'img/앞면 카드 3.jpg'
    },
    {
        name: '차4',
        img: 'img/앞면카드 4.jpg'
    },
    {
        name: '차4',
        img: 'img/앞면카드 4.jpg'
    },
    {
        name: '차5',
        img: 'img/카드 앞면 5.jpg'
    },
    {
        name: '차5',
        img: 'img/카드 앞면 5.jpg'
    },
    {
        name: '차6',
        img: 'img/앞면 카드 6.jpg'
    },
    {
        name: '차6',
        img: 'img/앞면 카드 6.jpg'
    },
]
document.addEventListener('DOMContentLoaded', () => {
    // 카드 섞기
    cards.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardChosen = []
    let cardChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'img/images.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard) 
            grid.appendChild(card)
        }
    }
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardChosen.push(cards[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src',cards[cardId].img)
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]
    
        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/images.jpg')
            cards[optionTwoId].setAttribute('src', 'img/images.jpg')
            alert('You have clicked the same image!')
            }
        else if (cardChosen[0] === cardChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'img/뒷면.jpg')
            cards[optionTwoId].setAttribute('src', 'img/뒷면.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/images.jpg')
            cards[optionTwoId].setAttribute('src', 'img/images.jpg')
            alert('Sorry, try again')
        }
        cardChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardsWon.length
        if  (cardsWon.length === cards.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
            }
        }

    createBoard();
})
