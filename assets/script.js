var startBtn = document.getElementById('startBtn');

var quizContainer = document.getElementById('quiz')
var answerBtnContainer = document.getElementById('answers');
var resultsContainer = document.getElementById('results');
var timer = document.getElementById('timer')

var timeCounter = 60;
timer.style.display = 'none';


var startQuiz = startBtn.addEventListener('click', generateQuiz());

const question1 = {
    question: "A term used by developers that means to improve the way your code is written while still making sure it performs the same action.",
    answers: {
        1: '1: refactor',
        2: '2: loop',
        3: '3: pattern matching',
        4: '4: debug',
    },
    correctAnswer: "1"
};

const question2 = {
    question: "What is a JavaScript element that represents either TRUE or FALSE values?",
    answers: {
        1: '1: Function',
        2: '2: Event',
        3: '3: Boolean',
        4: '4: Argument',
    },
    correctAnswer: "3"
};

const question3 = {
    question: "A placeholder for a piece of information that can change.",
    answers: {
        1: '1: event',
        2: '2: variable',
        3: '3: command',
        4: '4: function',
    },
    correctAnswer: "2"
};

const question4 = {
    question: "Putting commands in correct order so computers can read the commands.",
    answers: {
        1: '1: event',
        2: '2: conditionals',
        3: '3: variable',
        4: '4: sequencing',
    },
    correctAnswer: "4"
};



function startTimer() {

    var timerInterval = setInterval(function () {
        timer.style.display = 'block';
        timeCounter--;
        timer.textContent = `Time: ${timeCounter}`;

        if (isWin) {
            clearInterval(timerInterval);
            showWin();

        }
        if (timeCounter === 0) {
            clearInterval(timerInterval);
            gameOver;
        }
    }, 1000);

}

function generateQuiz() {

}

function showResults() {

}

function isWin() {

}

function showWin() {

}

function gameOver() {

}
