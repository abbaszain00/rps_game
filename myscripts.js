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
            playerSelection = playerSelection.toLowerCase(); // Convert to lowercase
            computerSelection = computerSelection.toLowerCase(); // Convert to lowercase
          
            if (playerSelection === computerSelection) {
                return playRound(playerSelection, computerSelection);
            } else if (playerSelection === "rock" && computerSelection === "paper") {
              return "Computer";
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
              return "Player";
            } else if (playerSelection === "paper" && computerSelection === "rock") {
              return "Player";
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
              return "Computer";
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
              return "Computer";
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
              return "Player";
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

if (playerWins > computerWins) {
    console.log("Congratulations! You won the best-of-five series!");
  } else if (playerWins < computerWins) {
    console.log("Sorry, you lost the best-of-five series. Try again!");
  } else {
    console.log("The series ended in a tie. Try again!");
  }

