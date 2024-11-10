const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection ==="scissors") ||
        (playerSelection === "paper" && computerSelection ==="rock") ||
        (playerSelection === "scissors" && computerSelection ==="paper")
        
    ) {return "Player"}
    else {
        return "Computer"
    }
}

function playRound(playerSelection, computerSelection) {
        const result = checkWinner(playerSelection, computerSelection)

        if (result == "Tie") {
            return "It's a Tie"
        } else if (result == "Player") {
            return "You won"
        } else { 
            return "You lost"
        }
    }

function getPlayerChoice () {
        let validatedInput = false;
        while (validatedInput == false){
            const choice = prompt ("Rock, Paper or Scissors?");
            if (choice == null) {
            continue;
            }
            const choiceInLower = choice.toLowerCase();
            if (options.includes(choiceInLower)) {
                validatedInput = true;
                return choiceInLower;
            }
        }
    }

    function game () {
        let scorePlayer = 0;
        let scorePC= 0;
        for (let i=0; i <5; i++) {
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));

            if (checkWinner(playerSelection, computerSelection) == "Player") {
                scorePlayer++
            } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
                scorePC++
            }
        }

        if (scorePlayer > scorePC)  {
            console.log("Gamer over, you won!")
        } else if (scorePlayer < scorePC)  {
            console.log("Gamer over, Computer won!")
        } else {
            console.log("Gamer over, its a tie!")

    }

}

game ();
