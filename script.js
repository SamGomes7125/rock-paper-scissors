let humanScore = 0;
let computerScore = 0;
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

function playRound(humanChoice, computerChoice) {
  const resultDiv = document.querySelector("#results");
  const scoreDiv = document.querySelector("#score");

  let result = "";
  // Determine the result of the round
    if (humanChoice === computerChoice) {
      result = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      resultDiv.textContent = `You win this round! ${humanChoice} beats 
${computerChoice}. 
      Score — You: ${humanScore} | Computer: ${computerScore}`;
    } else {
      computerScore++;
      resultDiv.textContent = `You lose this round! ${computerChoice} 
beats ${humanChoice}. 
}
 // 🧮 Update the score display
  scoreDiv.textContent = `Score — You: ${humanScore} | Computer: 
${computerScore}`;
  resultDiv.textContent = result;

  // 🏆 Check for winner
  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5 ? "🎉 You win the game!" : "💻 Computer wins the 
game!";
    resultDiv.textContent = winner;

    // Disable buttons after game ends
    document.querySelectorAll("button").forEach((btn) => (btn.disabled = 
true));

    // Add a "Play Again" button
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.id = "playAgain";
    document.body.appendChild(playAgainBtn);

    playAgainBtn.addEventListener("click", () => {
      humanScore = 0;
      computerScore = 0;
      scoreDiv.textContent = "Score — You: 0 | Computer: 0";
      resultDiv.textContent = "Let's play again!";
      document.querySelectorAll("button").forEach((btn) => (btn.disabled = 
false));
      playAgainBtn.remove();
    });
  }
}

function handleClick(choice) {
  const computerChoice = getComputerChoice();
  playRound(choice, computerChoice);
}

document.querySelector("#rock").addEventListener("click", () => 
handleClick("rock"));
document.querySelector("#paper").addEventListener("click", () => 
handleClick("paper"));
document.querySelector("#scissors").addEventListener("click", () => 
handleClick("scissors"));


