
let cards = []
let sum  = 0
let hasBlackJack =false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let CardsEl = document.getElementById("cards-el")
let isAlive = true

let player = {
     name : "Tyller",
     chips : 250
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name+ ": $" + player.chips

function startGame(){
    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber >10){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}
function renderGame(){

    CardsEl.textContent = "Cards: " 

    for (let i = 0;  i < cards.length; i++ ){
        CardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " +  sum

    if (sum < 21){
        message= "Do you want to Draw a new Card? "
    }else if (sum === 21){
        message = "Woooo You've Got BlackJack!!"
        hasBlackJack = true
    }else {
        message = "You are out of the Game!!"
        isAlive =false
    }
    messageEl.textContent = message

}
function newCard(){
    if (isAlive === true && hasBlackJack === false ){

        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}


