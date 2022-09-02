function start() {
    timeLeft = 100;
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