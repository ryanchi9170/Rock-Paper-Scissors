function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
  if (playerScore === 5 || computerScore === 5) {
    return;
  }
  let computerSelection = getComputerChoice();
  let resultText = document.querySelector('.roundResult');
  let score = document.querySelector('.score');
  if (playerSelection === computerSelection) {
    resultText.textContent = 'Draw!';
    return "Draw!";
  }
  else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || playerSelection === "scissors" && computerSelection === "paper") {
    resultText.textContent = 'You Win!';
    playerScore++;
    return "Win!";
  }
  else {
    resultText.textContent = 'You Lose!';
    computerScore++;
    return "Lose!";
  }
}

function displayScore (result) {
  let resultText = document.querySelector('.roundResult');
  let score = document.querySelector('.score');
  if (result === 'Win!') {
    resultText.textContent = 'You Win!';
  }
  else if (result === 'Lose!') {
    resultText.textContent = 'You Lose!';
  }
  else if (result === 'Draw!') {
    resultText.textContent = 'Draw!';
  }
  else {
    return;
  }
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      resultText.textContent = 'Player Wins!';
    }
    else {
      resultText.textContent = 'Computer Wins!';
    }
  }
  score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
}

let playerScore = 0,
    computerScore = 0;

const container = document.querySelector('#container');

const rock = document.createElement('button');
rock.textContent = 'Rock';
rock.style['margin'] = '10px';
rock.addEventListener('click', () => {
  displayScore(playRound('rock'));
})

const paper = document.createElement('button');
paper.textContent = 'Paper';
paper.style['margin'] = '10px';
paper.addEventListener('click', () => {
  displayScore(playRound('paper'));
})

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
scissors.style['margin'] = '10px';
scissors.addEventListener('click', () => {
  displayScore(playRound('scissors'));
})

const result = document.createElement('div');
result.className = 'roundResult';

const scorekeeper = document.createElement('div');
scorekeeper.className = 'score';



container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
container.appendChild(result);
container.appendChild(scorekeeper);