const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice 
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
}))

function generateComputerChoice(){
    const randomNumber =  Math.floor(Math.random() * possibleChoices.length)
    
    if ( randomNumber === 0){
        computerChoice = 'rock'
    } if ( randomNumber == 1){
        computerChoice = 'scissors'
    }
    if ( randomNumber == 2){
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}



function generateResult(){
    
    if ( (computerChoice == userChoice )){
        result = 'Empate'
    }
    else if (  (userChoice == 'paper')  &&  (computerChoice == 'rock')){
        result = 'Vitória'
    }
    else if (  (userChoice == 'rock') && (computerChoice == 'scissors')){
        result = 'Vitória'
    }
    else if (  (userChoice == 'paper')  && (computerChoice == 'scissors')){
        result = 'Derrota'
    }
    else if (  (userChoice == 'scissors') && (computerChoice == 'rock')){
        result = 'Derrota'
    }
    else if (   (userChoice == 'rock') && (computerChoice == 'paper')){
        result = 'Derrota'
    }
    else if (  (userChoice == 'scissors') && (computerChoice == 'paper')){
        result = 'Vitória'
    }
    
    resultDisplay.innerHTML = result
}