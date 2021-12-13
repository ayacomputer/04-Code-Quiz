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
    answer: "btn0"
},
{
    question: "Q: What is a JavaScript element that represents either TRUE or FALSE values?",
    choices: ['1: function', '2: event', '3: boolean', '4: argument'],
    answer: 'btn2'
},
{
    question: "Q: A placeholder for a piece of information that can change.",
    choices: ['1: event', '2: variable', '3: command', '4: function'],
    answer: 'btn1'
},
{
    question: "Q: Putting commands in correct order so computers can read the commands.",
    choices: ['1: conditionals', '2: event', '3: variable', '4: sequencing'],
    answer: 'btn3'
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
    for (let i = 0; i < quiz[currentIndex].choices.length; i++) {

        quizContainer.innerText = quiz[currentIndex].question;
        var button = document.createElement('button');
        console.log(button)
        button.setAttribute('id', `btn${i}`)
        button.setAttribute('class', 'btn')
        button.innerHTML = quiz[currentIndex].choices[i];
        answerBtnContainer.appendChild(button);
    }

    btn0.addEventListener('click', function () {
        console.log('working');
        resultContainer.innerText = '';
        if (btn0 === quiz[currentIndex].answer) {
            showCorrect();
            generateQuiz();
        }
        else {
            showWrong();
        }
    })

    btn1.addEventListener('click', function () {
        console.log('working');
        resultContainer.innerText = '';
        if (btn1 == quiz[currentIndex].answer) {
            showCorrect();
            generateQuiz();
        }
        else {
            showWrong();
        }
    })
    btn2.addEventListener('click', function () {
        console.log('working');
        resultContainer.innerText = '';
        if (btn2 == quiz[currentIndex].answer) {
            showCorrect();
            generateQuiz();
        }
        else {
            showWrong();
        }
    })

    btn3.addEventListener('click', function () {
        console.log('working');
        resultContainer.innerText = '';
        if (btn3 == quiz[currentIndex].answer) {
            showCorrect();
            generateQuiz();
        }
        else {
            showWrong();
        }
    })

    btn4.addEventListener('click', function () {
        console.log('working');
        resultContainer.innerText = '';
        if (btn4 == quiz[currentIndex].answer) {
            showCorrect();
            generateQuiz();
        }
        else {
            showWrong();
        }
    })


    currentIndex++;

}



function showCorrect() {
    resultContainer.innerText = `Correct`;

}

function showWrong() {
    resultContainer.innerText = `Wrong`;
    timeCounter -= 10;
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
    // resultContainer.innerText = `Your score is ${timeCounter}`;
}
