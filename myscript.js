const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice
}

//function getPlayerChoice () {
   //     let validatedInput = false;
   //     while (validatedInput == false){
  //          const choice = prompt ("Rock, Paper or Scissors?");
  //          if (choice == null) {
  //          continue;
  //          }
  //          const choiceInLower = choice.toLowerCase();
  //          if (options.includes(choiceInLower)) {
  //             validatedInput = true;
  //              return choiceInLower;
  //         }
  //      }
  //  }

function game(userChoice) {
    let playerScore = 0;
    let computerScore = 0;
    const computerSelection = getComputerChoice();
       if (userChoice == computerSelection) {
        const tie = document.createElement("p");
        tie.textContent = "Tie";
        } else if ((userChoice == "rock" && computerSelection == "scissors") ||
            (userChoice == "paper" && computerSelection == "rock") ||
            (userChoice == "scissors" && computerSelection == "paper"))
        {
            const win = document.createElement("p");
            win.textContent = "Win";
        }   else {
            const lose = document.createElement("p");
            lose.textContent = "lose";
        } 
    }

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

rock.addEventListener("click", function(e) {
    game("rock") 
});

paper.addEventListener("click", function(e) {
    game("paper")
});

scissors.addEventListener("click", function(e) {
    game("scissors")
});

game ();
