//COMPUTER CHOICE 
function getComputerChoice(){
    // choices for computer
   var choices = ["rock", "paper", "scissors"]
   // defining random choice
   var random = Math.floor((Math.random() * choices.length))
   // creating random choice
   var randomChoice=choices[random];
   console.log(randomChoice);
}

let playerScore = 0;
let computerScore = 0;

let playerChoice = prompt("What's your move?")
    if (playerChoice.toLowerCase() === "rock", "paper", "scissors"){
    getComputerChoice()
    if (playerChoice === "rock" && getComputerChoice === "paper") {
        console.log(
            'Paper beats rock! Computer wins.')
    }
    }