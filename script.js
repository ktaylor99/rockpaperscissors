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
getComputerChoice();