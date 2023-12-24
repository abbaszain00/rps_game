let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
  

  

 
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return "TIE";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "Player";
    } else {
      return "Computer";
    }
  }
 
for (let i = 0; i < 4; i++) {

          
const playerSelection = prompt("Rock, Paper or Scissors:");
const computerSelection = getComputerChoice();
result = playRound(playerSelection, computerSelection);

if (result === "Player") {
    playerScore++;
    console.log("You win!");
} else if (result === "Computer") {
    computerScore++;
    console.log("You lose!");
} else {
    i--;
    console.log("It's a tie");

}
}

if (playerScore > computerScore) {
    console.log("Congratulations! You won the best-of-five series!");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lost the best-of-five series. Try again!");
  } else {
    console.log("The series ended in a tie. Try again!");
  }

