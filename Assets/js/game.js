// check list:
// declare questions(array)
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
          "numbers and strings",
          "other arrays",
          "booleans",
          "all of the above"
        ],
        answer: "all of the above"
      },
      {
        title:
          "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
      },
      {
        title:
          "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
      }
    
]; 
 // declare the "timerEl"
var timerEl = document.querySelectorAll("#timer")

var startButton = document.querySelector("#start-game");


// Countdown timer
function startTimer(duration, display) {
  var timer = duration, minutes,seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        timer = duration;
    }
}, 1000);
}

window.onclick = function () {
  var twoMinutes = 60 * 2,
      display = document.querySelector('#timer');
      startButton.style.display = 'none';
  startTimer(twoMinutes, display);
};

//Question start
function displayCurrentQuestion(){
document.querySelector('#questions').innerHTML=
`<h3>${questions[0].title}</h3>
<button>${questions[0].choices[0]}</button>
<button>${questions[0].choices[1]}</button>
<button>${questions[0].choices[2]}</button>
<button>${questions[0].choices[3]}</button>
`
}

startButton.onclick= displayCurrentQuestion

function displayCurrentQuestion(){
  document.querySelector('#questions').innerHTML=
  `<h3>${questions[0].title}</h3>
  <button>${questions[1].choices[0]}</button>
  <button>${questions[1].choices[1]}</button>
  <button>${questions[1].choices[2]}</button>
  <button>${questions[1].choices[3]}</button>
  `
  }

// function that "answerQuestion"

    // Check if selected answer is correct

        // IF the answer is wrong
        
            //THEN we need to subtract from timer

    // Display the next question
    
// Function "displayCurrentQuestion"

//startButton.addEventListener("click", startGame);