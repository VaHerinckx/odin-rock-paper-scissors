let game_count = 0;
let computer_score = 0;
let user_score = 0;
let result;

let buttons = document.querySelector(".buttons");

buttons.addEventListener('click', (event) => {
  let target = event.target;
  let userPick = document.createElement('p');
  switch(target.id) {
    case 'rock':
      userPick.setAttribute("id", "rock")

      break;
    case 'paper':
      userPick.setAttribute("id", "paper")
      break;
    case 'scissors':
      userPick.setAttribute("id", "scissors")
      break;
  }
  document.body.appendChild(userPick);
  let computerPick = getComputerChoice();
  let matchResult = pickWinner(computerPick, userPick.id);
  console.log(scoreBoard(matchResult, computerPick, userPick.id));
});

//while (game_count !=5) {
//  game();
//  console.log(`Current score at round ${game_count} - You: ${user_score} / Computer: ${computer_score}`)
//}

if (user_score > computer_score) {
  console.log("You win!!")
}
else if (user_score < computer_score) {
  console.log("You loose!!")
}
else {
  console.log("It's a draw!!")
}

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

function game() {
  computerSelection = getComputerChoice();
  playerSelection = prompt("Please input your pick: ").toLowerCase();
  while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    playerSelection = prompt("Not a valid pick! Please input your pick: ").toLowerCase();
  }
  result = pickWinner(computerSelection, playerSelection);
  console.log(scoreBoard(result, computerSelection, playerSelection));
  game_count +=1;
}
