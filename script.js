//DOM Elements
var buttonStart = document.getElementById("customBtn");
var quizResultsEl = document.getElementById("results");
var quizEl = document.getElementById("quiz");
var quesDisplay = document.getElementById("questions");
var ansDisplay = document.getElementById("answers");
var container = document.getElementsByClassName("container");

// When You click the Start Button the quiz starts
var score = 0;
var correctAns = [];
var incorrectAns = [];
var currentQuestionindex = 0;
var gameTimerId;
var counter = 60;

var correct = [2, 0, 3, 1, 1, 2];
const allQuestions = [
  {
    question: "What's another name for a folder in a computer's file system?",
    answers: ["A Myspace", "A Divison", "A Directory", "A File"],
    correctAns: 2
  },
  {
    question: "What do we call a directory that is being tracked by git?",
    answers: ["A Repo", "A PWD", "A Master Branch", "An Init"],
    correctAns: 0
  },
  {
    question:
      "What do you type in the terminal to find out which directory you are currently in?",
    answers: ["cd", "whereami", "rm -R", "pwd"],
    correctAns: 3
  },
  {
    question:
      "What is a key value pair that adds extra information to an HTML element?",
    answers: ["a Tag", "An Attribute", "An ID", "Content"],
    correctAns: 1
  },
  {
    question: "What does HTML stand for?",
    answers: [
      "Happy Text Markup Language",
      "Hyper Text Markup Language",
      "Hip Type Mashup Language",
      "Hyper Type Markup Language",
    ],
    correctAns: 1
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Common Style Sheets",
      "Circular Style Sheets",
      "Cascading Style Sheets",
      "Canned Style System",
    ],
    correctAns: 2
  },
];

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

function startQuestions() {}
//didnt write up to here
// array for answers
var correct = [2, 0, 3, 1, 1, 2];

for (let i = 1; i <= 4; i++) {
  document
    .getElementById("answer-" + i)
    .parentElement.addEventListener("click", function () {
      chosen = i;
      compareAnswer();
      updateQuestion();
    });
}

function displayQuestion() {
  // select a random question
  // random index
  randIndex = Math.floor(Math.random() * allQuestions.length);

  // remove question from questions list
  var question = allQuestions.splice(randIndex, 1)[0]; //{}

  console.log(question);
  // put question on page
  document.querySelector(".question").textContent = question.question;

    
    
// put choices on page
  var answers = question.answers;
  console.log(answers);
  for (var i = 0; i < answers.length; i++ ) {
    document.querySelector("#answer-" + (i + 1)).textContent = answers[i];
  }


// set up styles for the javascript answers
  document.getElementsByClassName("answer1").style.color = "blue";


  // remove actual answer from answers list
  answer = correct.splice(randIndex, 1);

  chosen = 0;
}
// to here
function startTimer() {
  gameTimerId = setInterval(gameTimer, 1000);
}

function gameTimer() {
  counter--;
  if (counter >= 0) {
    span = document.getElementById("count");
    span.innerHTML = "Time Remaining: " + counter + " seconds";

    //quiz should take to the first question
    // take from 1st Kahoot game
  }
  if (counter === 0) {
    alert("Sorry, Out of Time! Try again Next Time!");
    end();
    location.reload();
    return false;
    // add when the time goes out you return to the Beginning page.
  }
}


function start() {
  startTimer();
  displayQuestion();
}

function end() {
  clearInterval(gameTimerId);
  // ask for Username
  // Reset score
  // Fails the quiz
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
//When the game is over then i can save my initials and score.
