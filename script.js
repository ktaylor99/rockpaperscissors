function getComputerChoice(){
   var choices = ["rock", "paper", "scissors"]
   var random = Math.floor((Math.random() * choices.length))
   var randomChoice=choices[random];
   console.log(randomChoice);
   return randomChoice;
}

let playerScore = 0;
let computerScore = 0;

let playerChoice = prompt("What's your move?");
playerChoice = playerChoice.toLowerCase();

if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
} else {
  console.log("Invalid choice. Please choose either rock, paper, or scissors.");
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "paper") {
    console.log(`Paper beats rock! Computer wins.`);
    computerScore++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log(`Paper beats rock! You win.`);
    playerScore++;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log(`Rock beats scissors! Computer wins.`);
    computerScore++;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log(`Rock beats scissors! You win.`);
    playerScore++;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log(`Scissors beats paper! Computer wins.`);
    computerScore++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log(`Scissors beats paper! You win.`);
    playerScore++;
  } else {
    console.log("It's a tie!");
  }
}

function game() {
    for (let round = 1; round <= 5; round++) {
      console.log(`Round ${round}:`);
  
      let playerChoice = prompt("What's your move?");
      playerChoice = playerChoice.toLowerCase();
  
      if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
      } else {
        console.log("Invalid choice. Please choose either rock, paper, or scissors.");
        round--; 
      }
    }
  
    
    console.log(`Final Scores - Player: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
      console.log("Player wins the game!");
    } else if (playerScore < computerScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("It's a tie! The game is a draw.");
    }
  }
  
  game();
  
  
  
  
  
  
  