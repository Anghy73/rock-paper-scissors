function getComputerChoice() {
  let options = ["piedra", "papel", "tijeras"];
  let numberRamdon = Math.floor(Math.random() * options.length);
  return options[numberRamdon];
}

let countPlayer = 0;
let countPC = 0;

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection == computerSelection) {
    return "Draw";
  }

  if (
    (playerSelection == "piedra" && computerSelection == "tijeras") ||
    (playerSelection == "papel" && computerSelection == "piedra") ||
    (playerSelection == "tijeras" && computerSelection == "papel")
  ) {
    ++countPlayer;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    ++countPC;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

let countGame = 0;

function game() {
  if (countPC < 5 && countPlayer < 5) {
    const playerSelection = prompt(
      "Elija una opción: Piedra - Papel - Tijeras"
    ).toLowerCase();
    const pcSelection = getComputerChoice().toLowerCase();
    console.log(playRound(playerSelection, pcSelection));
    countGame++;
    game();
  } else {
    console.table({
      Player: countPlayer,
      PC: countPC,
    });
  }
}

game();
