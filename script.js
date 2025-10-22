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

function getHumanChoice() {
  const userInput = prompt("Choose rock, paper, or scissors:");
  return userInput.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
  // Make human input case-insensitive
    humanChoice = humanChoice.toLowerCase();

  // Determine the result of the round
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
      console.log(`Score — You: ${humanScore}, Computer: 
${computerScore}`);
  }
    for (let i = 1; i <= 5; i++) {
      console.log(`\nRound ${i}`);
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
   }
   // Final results
    console.log("\nFinal Results:");
    if (humanScore > computerScore) {
      console.log(`You win the game! 🎉 Final Score: ${humanScore} - 
${computerScore}`);
    } else if (computerScore > humanScore) {
      console.log(`You lose the game 😢 Final Score: ${humanScore} - 
${computerScore}`);
    } else {
      console.log(`It's a draw! 🤝 Final Score: ${humanScore} - 
${computerScore}`);
  }
}
// Start the game
playGame();
   

