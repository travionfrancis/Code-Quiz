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

const myQuestions = [
  {
    question: "What's another name for a folder in a computer's file system?",
    answers: {
      a: "A Myspace",
      b: "A Divison",
      c: "A Directory",
      d: "A File",
    },
    correctAnswer: "c",
  },
  {
    question: "What do we call a directory that is being tracked by git?",
    answers: {
      a: "A Repo",
      b: "A PWD",
      c: "A Master Branch",
      d: "An Init",
    },
    correctAnswer: "a",
  },
  {
    question:
      "What do you type in the terminal to find out which directory you are currently in?",
    answers: {
      a: "cd",
      b: "whereami",
      c: "rm -R",
      d: "pwd",
    },
    correctAnswer: "d",
  },
  {
    question:
      "What is a key value pair that adds extra information to an HTML element?",
    answers: {
      a: "a Tag",
      b: "An Attribute",
      c: "An ID",
      d: "Content",
    },
    correctAnswer: "b",
  },
  {
    question: "What does HTML stand for?",
    answers: {
      a: "Happy Text Markup Language",
      b: "Hyper Text Markup Language",
      c: "Hip Type Mashup Language",
      d: "Hyper Type Markup Language",
    },
    correctAnswer: "b",
  },
  {
    question: "What does CSS stand for?",
    answers: {
      a: "Common Style Sheets",
      b: "Circular Style Sheets",
      c: "Cascading Style Sheets",
      d: "Canned Style System",
    },
    correctAnswer: "c",
  },
];

// 5. What does HTML stand for?
// 1. Happy Text Markup Language 2.  Hyper Text Markup Language 3.  Hip Type Mashup Language 4. Hyper Type Markup Language
// 2

// 6. What does CSS stand for?
// 1. Common Style Sheets 2. Circular Style Sheets 3. Cascading Style Sheets 4. Canned Style System
// 3

// Eventually an Eventlistener will be needed.

// Timer starts

// Presented with a question
// prompt

// answer the question and presented with another question

// if i answer the question incorrectly the time is subtracted

//When all questions are answered  or the timer reaches 0, the game is over.

//When the game is over then i can save my initials and score
