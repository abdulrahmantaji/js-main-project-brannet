const array = ["Rock", "paper", "Scissors"];

const computerPlay = function (array) {
  // get random index value

  const randomIndex = Math.floor(Math.random() * array.length);

  // get random item
  const item = array[randomIndex];

  return item;
};

const playerSelection = function () {
  let resp = window.prompt("choose Rock, paper, or Scissors ");
  return resp;
};

// to determen who won in the round player vs computer
const playRound = function (playerSelectionResult, computerResult) {
  if (
    (playerSelectionResult == "ROCK" && computerResult == "PAPER") ||
    (playerSelectionResult == "SCISSORS" && computerResult == "ROCK") ||
    (playerSelectionResult == "PAPER" && computerResult == "SCISSORS")
  ) {
    return "computer wins";
  } else if (
    (playerSelectionResult == "PAPER" && computerResult == "ROCK") ||
    (playerSelectionResult == "ROCK" && computerResult == "SCISSORS") ||
    (playerSelectionResult == "SCISSORS" && computerResult == "PAPER")
  ) {
    return "you win";
  } else if (playerSelectionResult == computerResult) {
    return "drow";
  } else {
    //alert("you should type one of the following {ROCK PAPER SCISSORS}");
    console.log("you should type one of the following {ROCK PAPER SCISSORS}");
  }
};

// to initialize all the functions in order to play 5 rounds and give the score at the end
const game = function () {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    //to determen the computer selection
    const computerResult = computerPlay(array).toUpperCase();
    //to get the player selection
    const playerSelectionResult = playerSelection(array).toUpperCase();
    // to call the round function in order to see who wins
    playRound(playerSelectionResult, computerResult);
    if (playRound(playerSelectionResult, computerResult) == "you win") {
      playerScore++;
    } else if (
      playRound(playerSelectionResult, computerResult) == "computer wins"
    ) {
      computerScore++;
    }
  }
  let drowScore = 5 - (playerScore + computerScore);

  alert(`you ${playerScore} computer ${computerScore} drow ${drowScore}`);
  console.log(`you ${playerScore} computer ${computerScore} drow ${drowScore}`);
};
game();
