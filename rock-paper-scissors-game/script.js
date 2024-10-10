let userWinCount = 0;
let computerWinCount = 0;

// array to choose computers input randomly
const computerSelectionArray = ["ROCK", "PAPER", "SCISSOR"];

// paragrhaphs to update user score and choice
const userChoicePara = document.getElementById("user-choice");
const userWinCountPara = document.getElementById("user-win-count");

// paragraphs to update computers score and choice
const compChoicePara = document.getElementById("comp-chioce");
const compWinCountPara = document.getElementById("comp-win-count");

// rock paper scissor buttons
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorButton = document.getElementById("scissor-btn");

// adding click event listner on all three buttons
rockButton.addEventListener("click", () => handleClick("ROCK"));
paperButton.addEventListener("click", () => handleClick("PAPER"));
scissorButton.addEventListener("click", () => handleClick("SCISSOR"));

//function to handle user selection
function handleClick(userChoice) {
  console.log("Users Choice is :" + userChoice);
 
    // get random choice of computer
const randomIndex = Math.floor(Math.random() * 3);
  const computersChoice = computerSelectionArray[randomIndex];
  console.log("Computer choice is : " + computersChoice);
  
   //updating dom
   userChoicePara.textContent = userChoice;
  compChoicePara.textContent = computersChoice;
  
    // check who have won
if (userChoice === computersChoice) {
 console.log("Draw");
  } else if (
    (userChoice === "ROCK" && computersChoice === "SCISSORS") ||
    (userChoice === "SCISSOR" && computersChoice === "PAPER") ||
    (userChoice === "PAPER" && compChoicePara === "ROCK")
  ) {
    console.log("User Won");
    userWinCount++;
    userWinCountPara.innerHTML = `Player: ${userWinCount}`;
  } else {
    console.log("Computer won");
    computerWinCount++;
    compWinCountPara.innerHTML = `Computer: ${computerWinCount}`;
  }
  if (computerWinCount === 5) {
    console.log(
      "computer won the tournament UserWinCount is " +
        userWinCount +
        "and computers score is " +
        computerWinCount
    );
  } else if (userWinCount === 5) {
    console.log(
      "Congratulations you won .... UserWinCount is " +
        userWinCount +
        "and computers score is " +
        computerWinCount
    );
  }
}