// variables
var startBtn = document.getElementById('startBtn');

var container = document.getElementById('container')
var quizContainer = document.getElementById('quiz')
var answerBtnContainer = document.getElementById('btns');
var resultContainer = document.getElementById('result');
var correctContainer = document.getElementById('correction');
var userDataContainer = document.getElementById('userData');
var timer = document.getElementById('timer');

var submitBtn = document.getElementById('submitBtn');
var scoreData = document.getElementById('scoreData');
var initial = document.getElementById('initial');
var highScoreContainer = document.getElementById('highScoreContainer');

var currentIndex = 0;
userDataContainer.style.display = 'none';
highScoreContainer.style.display = 'none';



// timer
var timeCounter = 60;
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
    question: "Q: What is a term used by developers that means to improve the way your code is written while still making sure it performs the same action.",
    choices: ['1: refactor', '2: loop', '3: pattern matching', '4: debug'],
    answer: '1: refactor'
},
{
    question: "Q: What is a JavaScript element that represents either TRUE or FALSE values?",
    choices: ['1: function', '2: event', '3: boolean', '4: argument'],
    answer: '3: boolean'
},
{
    question: "Q: What is a placeholder for a piece of information that can change.",
    choices: ['1: event', '2: variable', '3: command', '4: function'],
    answer: '2: variable'
},
{
    question: "Q:What is a term used by developers that means to putting commands in correct order so computers can read the commands.",
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
            showScore();

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
    correctContainer.innerText = ' ';
}
function generateQuiz() {
    console.log(('Generate Quiz'));
    quizContainer.innerText = quiz[currentIndex].question;

    for (let i = 0; i < quiz[currentIndex].choices.length; i++) {
        var button = document.createElement('button');
        //console.log(button)
        button.setAttribute('id', `btn${i}`)
        button.setAttribute('class', 'btn')
        button.innerHTML = quiz[currentIndex].choices[i];

        button.addEventListener('click', function (event) {
            var clickedBtn = event.target;


            if (clickedBtn.innerHTML === quiz[currentIndex].answer) {

                console.log('Correct');
                showCorrect();
                console.log(currentIndex);

                currentIndex++;

                if (currentIndex === quiz.length) {
                    isWin = true;
                    showScore();
                    return;
                }
                nextQuiz();

            } else {
                showWrong();
            }
        })

        answerBtnContainer.appendChild(button);
    }

}

var scoreArr = [];
localStorage.getItem('highScore');

if (scoreArr === '') {
    scoreArr = [];
}

function saveScore(event) {
    event.preventDefault();

    var initialValue = initial.value;

    var userData = {
        'initial': initial.value,
        'score': timeCounter,
    }

    console.log(userData);

    if (initialValue === '') {
        alert('Please enter your Initials');
        return;
    }
    clearScreen();

    var savedScore = localStorage.setItem('highScore', userData);


}




submitBtn.addEventListener('submit', function (event) {
    event.preventDefault();
    saveScore();
    clearScreen();
    highScoreContainer.style.display = 'block';


});


for (let i = 0; i < localStorage.length; i++) {
    const initialValue = localStorage.initialValue[i];
    const value = localStorage.getItem(initialValue);
    scoreData.innerHTML += `${timeCounter}: ${value} <br/>`
}



// const alphabets = ['ABCDEFGHIJKLMNOPQRWSTUVWXYZ'].split();
// console.log(alphabets);
// // if (alphabets.includes(initial.value)) {
// //     console.log(initial.value);
// //     showHighScore()

// // } else {
// //     alert('Please enter the invalid initial. Initials have to be capitalized.')
// // }


// clearBtn.addEventListener('click', function () {
//     clearScore();
// })


function nextQuiz() {
    var timeOut = setTimeout(function () {
        clearScreen();
        generateQuiz();
    }, 600);
}

function showCorrect() {
    correctContainer.innerText = 'Correct';
}

function showWrong() {
    correctContainer.innerText = 'Wrong';
    setTimeout(function () {

        correctContainer.innerText = '';
    }, 600);

    if (timeCounter >= 10) {
        timeCounter -= 10;
    } else {
        gameOver();
    }
}


function showScore() {
    clearScreen();
    quizContainer.innerText = 'You win!';
    resultContainer.innerText = `Your score is ${timeCounter}`;
    userDataContainer.style.display = 'block';
}



function gameOver() {
    clearScreen();
    quizContainer.innerText = 'Game Over!';
}

function showHighScore() {
    quizContainer.innerText = 'High Score:';
    resultContainer.innerHTML = `${timeCounter}`;
}

function clearScore() {
    clearScreen();
    quizContainer.innerText = '    '
}