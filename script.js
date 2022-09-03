let score = 0;
let timeLeft = 0;
let timer;
let currentQuest = -1

let questions = [
    {
      title: "What does HTML stand for?",
      choices: [  "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",],
      answer: "Hyper Text Markup Language",
    },
    {
      title: "What does CSS stand for?",
      choices: [ "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",],
      answer: "Cascading Style Sheet",
    },
    {
      title: "What does PHP stand for?",
      choices: [ "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",],
      answer: "Hypertext Preprocessor",
    },
    {
      title: "What does SQL stand for?",
      choices: [ "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"],
      answer: "Structured Query Language",
    },
    {
      title: "What does XML stand for?",
      choices: ["eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
      ],
      answer: "eXtensible Markup Language",
    },
  ];

function start() {
    timeLeft = 100;
    document.getElementById("timeLeft").innerHTML = timeLeft;

  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
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
      ` <h2>Game over!</h2>
  <h3>You got a ` +
      score +
      ` /100!</h3>
  <h3>That means you got ` +
      score / 20 +
      ` questions correct!</h3>
  <input type="text" id="name" placeholder="First name"> 
  <button onclick="setScore()">Set score!</button>`;
  
    document.getElementById("quizBody").innerHTML = quizContent;
  }
  
  function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById("name").value);
    getScore();
  }
  
  function getScore() {
    var quizContent =
      `
  <h2>` +
      localStorage.getItem("highscoreName") +
      `'s highscore is:</h2>
  <h1>` +
      localStorage.getItem("highscore") +
      `</h1><br> 
  <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
  `;
  
    document.getElementById("quizBody").innerHTML = quizContent;
  }
  
  //clear the score name and value in the local storage if the user selects 'clear score'
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");
  
    resetGame();
  }
  
  function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuest = -1;
    timeLeft = 0;
    timer = null;
  
    document.getElementById("timeLeft").innerHTML = timeLeft;
  
    document.getElementById("quizBody").innerHTML = quizContent;
  }
  
  function incorrect() {
    timeLeft -= 15;
    next();
  }
  
  function correct() {
    score += 20;
    next();
  }
  
  function next() {
    currentQuest++;
  
    if (currentQuest > questions.length - 1) {
      endGame();
      return;
    }

let quizContent = "<h2>" + questions[currentQuest].title + "</h2>";

for (let i = 0; i < questions[currentQuest].choices.length; i++) {
  let btn = '<button onclick="[ANS]">[CHOICE]</button>';
  btn = btn.replace("[CHOICE]", questions[currentQuest].choices[i]);

  if (
    questions[currentQuest].choices[i] == questions[currentQuest].answer
  ) {
    btn = btn.replace("[ANS]", "correct()");
  } else {
    btn = btn.replace("[ANS]", "incorrect()");
  }
  quizContent += btn;
}
document.getElementById("quizBody").innerHTML = quizContent;
}