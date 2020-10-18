//DOM Elements
var buttonStart = document.getElementById("customBtn");
var quizResultsEl = document.getElementById("results");
var quizEl = document.getElementById("quiz");
var quesDisplay = document.getElementById("questions");
var ansDisplay = document.getElementById("answers");

// When You click the Start Button the quiz starts
var score = 0;
var correctAns = [];
var incorrectAns = [];
var currentQuestionindex = 0;

function askQuestion(question, index) {
  var answer = prompt(question[0], "");
  if (answer == question[1]) {
    alert("Correct!");
    score++;
    correctAns = question;
  } else {
    incorrectAns.push(index);
    alert("Sorry. The correct answer is " + question[1]);
  }
}

const allQuestions = [
  {
    question: "What's another name for a folder in a computer's file system?",
    answers: ["A Myspace", "A Divison", "A Directory", "A File"],
    correctAnswer: "A Directory",
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

function startTimer() {
  var counter = 60;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = "Time Remaining: " + counter + " seconds";

      //quiz should take to the first question
      // take from 1st Kahoot game
    }
    if (counter === 0) {
      alert("Sorry, Out of Time! Try again Next Time!");
      clearInterval(counter);
      location.reload();
      return false;
      // add when the time goes out you return to the Beginning page.
    }
  }, 1000);
}

function getQuestion() {
  var currentQuestion = allQuestions[currentQuestionindex];
  quesDisplay.textContent = currentQuestion.question;
  currentQuestion.answers.forEach(function (answer) {
    var answerChoice = document.createElement("button");
    answerChoice.textContent = answer;
    // add eventlistener to each button and listen to a click
    // add a CSS class for each button
    // create a function
    ansDisplay.appendChild(answerChoice);
  });
}

function start() {
  startTimer();
  getQuestion();
}

buttonStart.addEventListener("click", start);

// What I need to do next:
// When the button is clicked, it starts the quiz with the first question.
// Displaying Only question at a time, and not a list.
// Time is decreased when answered wrong.
// When a question is answered correct, it displays CORRECT at the bottom of the page. Same for when answered incorrectly, WRONG.
// Score out of 6 being logged
// View Previous Highscores function, with initials

// Eventually an Eventlistener will be needed.
// Timer starts
// Presented with a question
// prompt
// answer the question and presented with another question
// if i answer the question incorrectly the time is subtracted
//When all questions are answered  or the timer reaches 0, the game is over.
//When the game is over then i can save my initials and score
