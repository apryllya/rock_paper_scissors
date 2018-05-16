
// debugger;

game();
function game() {

  var choices = ["rock", "paper", "scissors"];
  var rock = document.getElementById('userRock');
  var paper = document.getElementById('userPaper');
  var scissors = document.getElementById('userScissors');

  // Random choice
  //var computerChoice = Math.floor(Math.random() * Math.floor(3));

  var computerChoice;
  var computersChoice = document.getElementById('computersChoice');

  // Random choice
  // var userChoice = Math.floor(Math.random() * Math.floor(3));
  var userChoice;
  var usersChoice = document.getElementById('usersChoice');

  var pSelect = document.getElementById('pSelect');
  var result = document.getElementById('result');
  var playBtn = document.getElementById('playBtn');


  console.log("User choice: " + choices[userChoice]);
  console.log("Computer choice: " + choices[computerChoice]);

  function setComputerChoice(){
  computerChoice = Math.floor(Math.random() * Math.floor(3));
  }

  playBtn.addEventListener ("click", function() {
    setComputerChoice();
    usersChoice.innerHTML = choices[userChoice];
    computersChoice.innerHTML = choices[computerChoice];
    play();
  })

  rock.addEventListener ("click", function() {
    setUsersChoice(0);
  });

  paper.addEventListener ("click", function() {
    setUsersChoice(1);
  });

  scissors.addEventListener ("click", function() {
    setUsersChoice(2);
  });

  function setUsersChoice(newChoice){
    playBtn.disabled = false;
    pSelect.remove();
    userChoice = newChoice;
    usersChoice.innerHTML = choices[userChoice];
  }

  function play() {
    if (userChoice == computerChoice) {
      console.log("No winner, try again!");
      result.innerHTML = "No winner, try again!";
    }
    else {
      if (userChoice == 0 && computerChoice == 2) {
          console.log("User wins!");
          result.innerHTML = "User wins!"
      }
      else if (userChoice == 2 && computerChoice == 0) {
          console.log("Computer wins!");
          result.innerHTML = "Computer wins!"
        }
        else if (userChoice > computerChoice) {
          console.log("User wins!");
          result.innerHTML = "User wins!"
        }
          else {
            console.log("Computer wins!");
            result.innerHTML = "Computer wins!"
          }
        }
  }
}
