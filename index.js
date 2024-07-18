// Create a game of rps where user inputs their choice and computer will randomly generate an answer of rock, paper or scissor
// Create 2 functions asking input from user and random choice from CPU
// Store values in variables and compare all combinations using if else or switch statements
// Compare results and keep track of score and store score values in variables
// Create a function to start the game


let choices = ['rock', 'paper', 'scissor']
let playerScore = 0;
let cpuScore = 0;

function getUserInput(){
    let userInput = prompt("Enter rock, paper or scissor: ").toLowerCase();
    console.log(userInput)
    return userInput
}

function getCpuInput(){
    let cpuInput = choices[Math.floor(Math.random() * choices.length)].toLowerCase()
    console.log(cpuInput)
    return cpuInput
}



function playRound(humanChoice, computerChoice){
    let playerChoice = humanChoice
    let cpuChoice = computerChoice
    
    if(playerChoice === 'rock' && cpuChoice === 'scissor'){
        playerScore++;
        console.log('You win! Your score is: ' + playerScore + 'CPU score is:' + cpuScore)
    } else if (playerChoice === 'rock' && cpuChoice === 'paper'){
        cpuScore++;
        console.log('You lose. Your score is: ' + playerScore + 'CPU score is: ' + cpuScore)
    } else if(playerChoice === 'paper' && cpuChoice === 'rock'){
        playerScore++;
        console.log('You win! Your score is: ' + playerScore + 'CPU score is:' + cpuScore)
    } else if (playerChoice === 'paper' && cpuChoice === 'scissor'){
        cpuScore++;
        console.log('You lose. Your score is: ' + playerScore + 'CPU score is: ' + cpuScore)
    } else if(playerChoice === 'scissor' && cpuChoice === 'paper'){
        playerScore++;
        console.log('You win! Your score is: ' + playerScore + 'CPU score is:' + cpuScore)
    } else if (playerChoice === 'scissor' && cpuChoice === 'rock'){
        cpuScore++;
        console.log('You lose. Your score is: ' + playerScore + 'CPU score is: ' + cpuScore)
    } else {
        console.log("It's a tie")
        console.log(`Your score is ${playerScore} and CPU score is ${cpuScore}`)
    }

}

function playGame(){
    
    
    

    for(let i=0;i<5;i++){
    let humanChoice = getUserInput()
    let cpuChoice = getCpuInput()
    playRound(humanChoice,cpuChoice)
    }

    console.log(`Game is over.  Your score is ${playerScore} and CPU score is ${cpuScore}`)
}

playGame()
