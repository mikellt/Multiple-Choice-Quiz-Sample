// check list:
// declare count down Timer 
// declare questions(array)
var questions = [
    {
        // question
        // answers
        // correct answer
    },  //next
    {   
        // question
        // answers
        // correct answe
    },

]; 
 // declare the "timerEl"
var timerEl = document.querySelectorAll("#timer")

var startButton = document.querySelector("#start-game")

function startGame() {

    startTimer();

    displayCurrentQuestion();

}

function startTimer() {

}

function displayCurrentQuestion(){

}

startButton.addEventListener("click", startGame);