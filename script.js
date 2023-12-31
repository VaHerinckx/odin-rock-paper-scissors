let game_count = 0;
let computer_score = 0;
let user_score = 0;
let result;

let buttons = document.querySelector(".buttons");
let results = document.querySelector(".results");

buttons.addEventListener('click', (event) => {
  game_count ++;
  let target = event.target;
  let roundResult = document.createElement('p');
  switch(target.id) {
    case 'rock':
      roundResult.setAttribute("id", "rock")
      break;
    case 'paper':
      roundResult.setAttribute("id", "paper")
      break;
    case 'scissors':
      roundResult.setAttribute("id", "scissors")
      break;
  }
  let userPick = roundResult.id
  let computerPick = getComputerChoice();
  let matchResult = pickWinner(computerPick, userPick);
  roundResult.textContent = scoreBoard(matchResult, computerPick, userPick);
  results.appendChild(roundResult);
  let roundScoreBoard = document.createElement('p');
  roundScoreBoard.textContent = `Round ${game_count} : ${user_score} / ${computer_score}`
  results.appendChild(roundScoreBoard);
  if (user_score === 5 || computer_score ===5) {
    alert(`Game over! Final score: ${user_score} / ${computer_score}\nYou can keep playing, or refresh to start a new game!`)
  }
});

function getComputerChoice () {
  let result = Math.floor(Math.random()*3)
  let pick;
  switch (result) {
    case 0:
      pick = "paper";
      break;
    case 1:
      pick = "scissors";
        break;
    default:
      pick = "rock";
  }
  return pick;
}

function pickWinner (computerPick, userPick) {
  if (computerPick === userPick) {
    return "draw";
  }
  else if (userPick==="rock") {
    if(computerPick==="scissors") {
      return "win";
    }
    else {
      return "loss"
    }
  }
  else if (userPick==="paper") {
    if(computerPick==="rock") {
      return"win";
    }
    else {
      return "loss"
    }
  }
  else {
    if(computerPick==="paper") {
      return "win";
    }
    else {
      return "loss"
    }
  }
}

function scoreBoard (result, computerPick, userPick) {
  if (result==="win") {
    user_score ++;
    return (`You win! ${userPick} beats ${computerPick}`);
  }
  else if (result==="loss") {
    computer_score ++;
    return (`You loose! ${computerPick} beats ${userPick}`);
  }
  return `It's a tie! You both used ${userPick}`;
}
