const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const roundCount = document.getElementById("round-count");
const userImg = document.getElementById("user-img");
const computerImg = document.getElementById("computer-img");
const roundResult = document.getElementById("round-result");
const score = document.getElementById("score");
const gameOver = document.getElementById("game-over");
const newGame = document.getElementById("new-game");

let round = 1;
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
    play("rock");
});
paperBtn.addEventListener("click", () => {
    play("paper");
});
scissorsBtn.addEventListener("click", () => {
    play("scissors");
});

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

function play(userSelection) {
    
    if (round <= 5) {
        roundCount.innerHTML = "Round " + round;

        userImg.src = "img/" + userSelection + ".svg";

        const computerSelection = computerChoice();
        computerImg.src = "img/" + computerSelection + ".svg";

        const result = playRound(userSelection, computerSelection);
        roundResult.innerHTML = result;

        if (result === "You win!") {
            playerScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }

        round++;
        if (round > 5) {
            if (playerScore > computerScore) {
                gameOver.innerHTML = "Congratulations! You won the game!";
            } else if (playerScore < computerScore) {
                gameOver.innerHTML = "The computer won. Better luck next time!";
            } else {
                gameOver.innerHTML = "It's a tie. Well played!";
            }     

            let buttonNewGame = document.createElement("button");    
            buttonNewGame.innerText = "New Game";
    
            buttonNewGame.addEventListener("click", () => {
                round = 1;
                playerScore = 0;
                computerScore = 0;
                roundCount.innerHTML = "";
                roundResult.innerHTML = "";
                score.innerHTML = "";
                gameOver.innerHTML = "Choose an option";
                newGame.innerHTML = "";
            });
    
            newGame.appendChild(buttonNewGame);       
        }
    }       
    score.innerHTML = `Score: You - ${playerScore} | Computer - ${computerScore}`;    
    
}

