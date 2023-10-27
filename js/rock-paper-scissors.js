function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  let choice = prompt("Choose rock, paper, or scissors");
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
      choice = prompt("Choose rock, paper, or scissors");
      if (choice === "rock" || choice === "paper" || choice === "scissors") {
        break;
      }
      else {
        continue;
      }
    }
  return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw!";
  }
  else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || playerSelection === "scissors" && computerSelection === paper) {
    return "You Win!";
  }
  else {
    return "You Lose!";
  }
}

function game() {
  let playerScore = 0,
      computerScore = 0;
  while (playerScore < 5 && computerScore < 5) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let result = playRound(playerChoice, computerChoice);
    if (result === "Draw!") {
      console.log("Draw!");
    }
    else if (result === "You Win!") {
      console.log("You Win!")
      playerScore++;
    }
    else {
      console.log("You Lose!")
      computerScore++;
    }
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
  }
  if (playerScore === 5) {
    console.log("Player Wins!");
  }
  else {
    console.log("Computer Wins!");
  }
}
