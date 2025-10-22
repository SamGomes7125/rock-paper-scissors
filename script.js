console.log("Hello World");
function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}


console.log(getComputerChoice());
function getHumanChoice() {
  const userInput = prompt("Choose rock, paper, or scissors:");
  return userInput.toLowerCase();
}


console.log(getHumanChoice());

