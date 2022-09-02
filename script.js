let score = 0;
let timeLeft = 0;
let timer;


function start() {
    timeLeft = 5;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
      timeLeft--;
      document.getElementById("timeLeft").innerHTML = timeLeft;
      //End the game function when timer is below 0 at any time
      if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);

    next();
}

function endGame() {
  clearInterval(timer);

  let quizContent =
    ` <h2>Game over</h2>

<h3>You got a ` +
    score +
    ` /100!</h3>

<h3>You got ` +
    score / 20 +
    ` questions correct</h3>

<input type="text" id="name" placeholder="First name"> 

<button onclick="setScore()">Set score</button>`;

  document.getElementById("quizBody").innerHTML = quizContent;
  }