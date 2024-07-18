// Create a game of rps where user inputs their choice and computer will randomly generate an answer of rock, paper or scissor
// Create 2 functions asking input from user and random choice from CPU
// Store values in variables and compare all combinations using if else or switch statements
// Compare results and keep track of score and store score values in variables
// Create a function to start the game

//


let choices = ['rock', 'paper', 'scissor']
let playerScore = 0;
let cpuScore = 0;
let humanChoice = ""
let cpuChoice = ""

let buttonsContainer = document.querySelector(".buttons-container")
let resultsContainer = document.querySelector(".results")

let rockButton = document.createElement('button')
rockButton.setAttribute('value', choices[0])
rockButton.textContent = "rock"
console.log(rockButton)
let paperButton = document.createElement('button')
paperButton.setAttribute('value', choices[1])
paperButton.textContent = "paper"
let scissorButton = document.createElement('button')
scissorButton.setAttribute('value', choices[2])
scissorButton.textContent = "scissor"

buttonsContainer.appendChild(rockButton)
buttonsContainer.appendChild(paperButton)
buttonsContainer.appendChild(scissorButton)

let buttons = document.querySelectorAll("button")

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        humanChoice = e.target.value
        console.log(humanChoice)
        cpuChoice = getCpuInput()
        playRound(humanChoice,cpuChoice)
    })
})






function getCpuInput(){
    let cpuInput = choices[Math.floor(Math.random() * choices.length)].toLowerCase()
    return cpuInput;
}

function playRound(humanChoice, computerChoice){
    let playerChoice = humanChoice
    let cpuChoice = computerChoice
    
    if(playerChoice === 'rock' && cpuChoice === 'scissor'){
        playerScore++;
        resultsContainer.textContent = 'You win! Your score is: ' + playerScore + 'CPU score is:' + cpuScore
    } else if (playerChoice === 'rock' && cpuChoice === 'paper'){
        cpuScore++;
        resultsContainer.textContent ='You lose. Your score is: ' + playerScore + 'CPU score is: ' + cpuScore
    } else if(playerChoice === 'paper' && cpuChoice === 'rock'){
        playerScore++;
        resultsContainer.textContent ='You win! Your score is: ' + playerScore + 'CPU score is:' + cpuScore
    } else if (playerChoice === 'paper' && cpuChoice === 'scissor'){
        cpuScore++;
        resultsContainer.textContent ='You lose. Your score is: ' + playerScore + 'CPU score is: ' + cpuScore
    } else if(playerChoice === 'scissor' && cpuChoice === 'paper'){
        playerScore++;
        resultsContainer.textContent ='You win! Your score is: ' + playerScore + 'CPU score is:' + cpuScore
    } else if (playerChoice === 'scissor' && cpuChoice === 'rock'){
        cpuScore++;
        resultsContainer.textContent ='You lose. Your score is: ' + playerScore + 'CPU score is: ' + cpuScore
    } else {
        resultsContainer.textContent =`It's a tie
        Your score is ${playerScore} and CPU score is ${cpuScore}`
    }

}


