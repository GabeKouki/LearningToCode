

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
      return userInput;
    } else if (userInput === 'paper') {
      return userInput;
    } else if (userInput === 'scissors') {
      return userInput;
    } else if (userInput === 'bomb'){
      return userInput;
    } else {
      console.log('Invalid choice, pick again');
    }
    };
    
    function getComputerChoice() {
    const computer = Math.floor(Math.random() * 3);
    switch (computer) {
    case 0: 
      return 'rock';
      break;
    case 1: 
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    }
    };
    
    function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!'
      } else if (computerChoice === 'scissors') {
        return 'You win!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'You win!';
      } else if (computerChoice === 'scissors') {
        return 'Computer wins!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else if (computerChoice === 'paper') {
        return 'You win!';
      }
    }
    if (userChoice === 'bomb') {
      return 'You win!';
    }
    };
    function playGame() {
    userChoice = getUserChoice('bomb');
    computerChoice = getComputerChoice();
    console.log(`User picks ${userChoice}, Computer picks ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
    }
    playGame();
    
    