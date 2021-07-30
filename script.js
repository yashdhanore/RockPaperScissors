
function computerPlay() {
    let number = Math.floor(Math.random() * 3);   
    if(number == 0){
        return "Rock";
    }else{
        if(number == 1)
        {
            return "Paper";
        }
        else{
            return "Scissors";
        }
    }
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors";
    }
    else{
        if(playerSelection == "rock" && computerSelection == "paper"){
            return "You Lose! Paper beats Rock";
        }
    }

    if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock";
    }
    else{
        if(playerSelection == "paper" && computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper";
        }
    }

    if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper";
    }
    else{
        if(playerSelection == "scissors" && computerSelection == "rock"){
            return "You Lose! Rock beats Scissors";
        }
    }

    if(playerSelection == "rock" && computerSelection == "rock"){
        return "Its a Tie!"
    }
    if(playerSelection == "paper" && computerSelection == "paper"){
        return "Its a Tie!"
    }
    if(playerSelection == "scissors" && computerSelection == "scissors"){
        return "Its a Tie!"
    }
  }


  

  function game(){
   let player_wins = 0;
   let comp_wins = 0;
   let winner = "";
    for(var i = 0; i < 5; i++){
        const playerSelection = prompt("What's do you choose?");
        const computerSelection = computerPlay();
        let res = playRound(playerSelection, computerSelection)
        if(res.includes("Win")){
            player_wins++;
        }
        else{
            if(res.includes("Lose"))
            {
                comp_wins++;
            }
        }
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your Score: ${player_wins}`);
        console.log(`Computer's Score: ${comp_wins}`);  
    }
    if(player_wins > comp_wins){
        winner = "You Won!";
    }
    else{
        winner = "Computer Won!";
    }
    console.log(winner);
  }

  game();