function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let numberRamdon = Math.floor(Math.random() * options.length);
  return options[numberRamdon];
}

let human = document.querySelector(".human");
let pc = document.querySelector(".pc");
let message = document.querySelector(".start__message");
const options = document.querySelectorAll(".options__content");

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    let option = e.target.getAttribute("id");
    playRound(option, getComputerChoice());
  });
});

let countPlayer = 0;
let countPC = 0;

const restartView = document.querySelector(".restart");
const restartMessage = document.querySelector(".restart__message");

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);

  message.textContent = "";

  if (playerSelection == computerSelection) {
    message.textContent = "";
    return (message.textContent = "Draw");
  }

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    ++countPlayer;
    if (countPlayer >= 5) {
      restartView.style.display = "flex";
      restartMessage.textContent = "You Win :D";
    }
    human.textContent = `${countPlayer}`;
    return (message.textContent = `You Win! ${playerSelection} beats ${computerSelection}`);
  } else {
    ++countPC;
    if (countPC >= 5) {
      restartView.style.display = "flex";
      restartMessage.textContent = "You Lose :C";
    }
    pc.textContent = `${countPC}`;
    return (message.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

const buttonRestart = document.querySelector(".restart__button");

function restartGame() {
  restartView.style.display = "none";
  countPlayer = 0;
  countPC = 0;
  human.textContent = "0";
  pc.textContent = "0";
  message.textContent = "Choose your weapon";
}

buttonRestart.addEventListener("click", restartGame);