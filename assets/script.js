// variables
var startBtn = document.getElementById('startBtn');

var container = document.getElementById('container')
var quizContainer = document.getElementById('quiz')
var answerBtnContainer = document.getElementById('btns');
var resultContainer = document.getElementById('result');
var timer = document.getElementById('timer')

var currentIndex = '0';

// timer
var timeCounter = 61;
timer.style.display = 'none';
// isWin
var isWin = false;


// functions
var startQuiz = startBtn.addEventListener('click', function () {
    startTimer();
    clearScreen();
    generateQuiz();
});

// questions
const quiz = [{
    question: "Q: A term used by developers that means to improve the way your code is written while still making sure it performs the same action.",
    choices: ['1: refactor', '2: loop', '3: pattern matching', '4: debug'],
    answer: "1: refactor"
},
{
    question: "Q: What is a JavaScript element that represents either TRUE or FALSE values?",
    choices: ['1: function', '2: event', '3: boolean', '4: argument'],
    answer: '3: Boolean'
},
{
    question: "Q: A placeholder for a piece of information that can change.",
    choices: ['1: event', '2: variable', '3: command', '4: function'],
    answer: '2: variable'
},
{
    question: "Q: Putting commands in correct order so computers can read the commands.",
    choices: ['1: conditionals', '2: event', '3: variable', '4: sequencing'],
    answer: '4: sequencing'
},]


// timer
function startTimer() {

    var timerInterval = setInterval(function () {
        timer.style.display = 'block';
        timeCounter--;
        timer.textContent = `Time: ${timeCounter} sec`;

        if (isWin) {
            clearInterval(timerInterval);
            showWin();

        }
        if (timeCounter === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);

}


function clearScreen() {
    quizContainer.innerText = ' ';
    answerBtnContainer.innerText = ' ';
    resultContainer.innerText = ' ';
}
function generateQuiz() {
    currentIndex++;
    for (let i = 0; i < quiz[currentIndex].choices.length; i++) {

        quizContainer.innerText = quiz[currentIndex].question;
        var button = document.createElement('button');
        console.log(button)
        button.setAttribute('class', 'btn')
        button.innerHTML = quiz[currentIndex].choices[i];
        answerBtnContainer.appendChild(button);
    }

}



function showResults() {
    if (isWin) {

    }

}

function isWin() {
    isWin = true;
}

function showWin() {
    clearScreen;
    quizContainer.innerText = 'You win!';
    resultContainer.innerText = `Your score is ${timeCounter}`;

}

function displayInput() {
    var initial = document.createElement('input');
    initial.setAttribute('type', 'text');
    var email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('class', 'btn');
    var submitBtn = document.createElement('button');
    submitBtn.setAttribute('class', 'btn');

}

function storeData() {


}

function gameOver() {
    clearScreen();
    quizContainer.innerText = 'Game Over!';
}
