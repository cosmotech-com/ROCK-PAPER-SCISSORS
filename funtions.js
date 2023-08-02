function getUserChoice() {
    const userChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();
    
    // Validate the user's choice
    const validChoices = ["rock", "paper", "scissors"];
    if (!validChoices.includes(userChoice)) {
        alert("Invalid choice. Please choose: rock, paper, or scissors");
        return getUserChoice(); // Recursively call the function until a valid choice is made
    }
    
    return userChoice;
}
  
function computerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const choice = options[randomIndex];
    return choice;
}
  
function playRound(user, computer) {    
    if (user === computer) {
        return "It's a tie!";
    } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You win!";      
    } else {
        return "You lose!";      
    }    
}

function playGame() {
    let answer = prompt("Do you want to play? (y/n)").toLowerCase();

    while (answer === "y") {
        let playerScore = 0;
        let computerScore = 0;
        for (let round = 1; round <= 5; round++) {

            console.log("Round number " + round);

            const userSelection = getUserChoice();
            const computerSelection = computerChoice();            
            console.log(`You chose ${userSelection}. Computer chose ${computerSelection}.`);

            const roundResult = playRound(userSelection, computerSelection);
            console.log(roundResult);

            if (roundResult === "You win!") {
                playerScore++;
            } else if (roundResult === "You lose!") {
                computerScore++;
            }
        }
        console.log(`Final Score: You - ${playerScore} | Computer - ${computerScore}`);

        if (playerScore > computerScore) {
            console.log("Congratulations! You won the game!");
        } else if (playerScore < computerScore) {
            console.log("The computer won. Better luck next time!");
        } else {
            console.log("It's a tie. Well played!");
        }            
      
        // Ask the question again at the end of the loop
        answer = prompt("Do you want to play again? (y/n)").toLowerCase();
    }
} 



