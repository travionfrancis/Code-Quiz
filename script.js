//DOM Elements
var buttonStart = document.getElementById("customButt");
var resultsEl = document.getElementById("results");
var quizEl = document.getElementById("quiz");

// When You click the Start Button the quiz starts

function startTimer() {
  var counter = 60;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
      //quiz should take to the first question
      // take from 1st Kahoot game
    }
    if (counter === 0) {
      alert("Sorry, Out of Time! Try again Next Time!");
      clearInterval(counter);
      // add when the time goes out you return to the Beginning page.
    }
  }, 1000);
}
function start() {
  document.getElementById("count").style = "color:black;";
  startTimer();
}

//eventually an Eventlistener will be needed.

// Timer starts

// Presented with a question
// prompt

// answer the question and presented with another question

// if i answer the question incorrectly the time is subtracted

//When all questions are answered  or the timer reaches 0, the game is over.

//When the game is over then i can save my initials and score
