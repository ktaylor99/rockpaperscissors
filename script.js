function getComputerChoice(){
    var array = ["Rock", "Paper", "Scissors"]
    var index = Math.floor(Math.random() * array.length);
    var chosenChoice = array[index];

    console.log(chosenChoice)
}
getComputerChoice();