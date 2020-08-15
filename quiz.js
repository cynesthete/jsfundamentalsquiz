// START BUTTON that starts timer on click
var startButton = document.getElementById("generate")
var timeClock = document.getElementById("clock-timer")
var timer = document.getElementById("timer")
var questionLine = document.getElementById("question")
var choicesLine = document.getElementById("choices")

var timeKeeper = 100;
//var currentIndex = 0;
var gameTimer;

// Questions + Choices
var questionsArray = [
    {
        question: "What is sheep?",
        choices: [
            "friend", "no", "why?", "ok"
        ],
        answer: "why?"
    },
    {
        question: "What is corn?",
        choices: [
            "friend", "no", "why?", "ok"
        ],
        answer: "why?"
    },
    {
        question: "What is why?",
        choices: [
            "friend", "no", "why?", "ok"
        ],
        answer: "why?"
    },
    {
        question: "What is what?",
        choices: [
            "friend", "no", "why?", "ok"
        ],
        answer: "why?"
    },
    {
        question: "No?",
        choices: [
            "friend", "no", "why?", "ok"
        ],
        answer: "why?"
    },
    {
        question: "How dare you?",
        choices: [
            "friend", "no", "why?", "ok"
        ],
        answer: "why?"
    },
    {
        question: "Is this question satisfactory?",
        choices: [
            "friend", "no", "why?", "ok"
        ],
        answer: "why?"
    },
    {
        question: "What is sheep?",
        choices: [
            "friend", "no", "why?", "ok"
        ],
        answer: "why?"
    },
    {
        question: "What is sheep?",
        choices: [
            "friend", "no", "why?", "ok"
        ],
        answer: "why?"
    },
    {
        question: "What is sheep?",
        choices: [
            "friend", "no", "why?", "ok"
        ],
        answer: "why?"
    },
    {

    }
];

// Button should disappear on click and be replaced with timer
startButton.addEventListener("click", function() {
    console.log("I've been clicked"); 
    startButton.setAttribute("class", "hide");
    timer.removeAttribute("class", "hide");
startQuiz();
});

function startQuiz() {
    console.log("I work!")
    gameTimer = setInterval(timerCountdown, 1000);
    populateQuestions();
}

// Quiz should end when timer hits zero
function timerCountdown() {
    timeKeeper --;
    timeClock.textContent=timeKeeper;
    if (timeKeeper <=0) {
        timeKeeper = 0;
        endQuiz();
    }
}

// Incorrect answers should remove 10 seconds from timer
function subtractTime() {
    timeKeeper = timeKeeper - 10;
}

// Timer should clear when quiz ends
function endQuiz() {
    clearInterval(gameTimer);
}

// Populate questions and choices
function populateQuestions() {
    var correctAnswer = 0;
    var currentIndex = 0;
    var currentQuestion = questionsArray[currentIndex];
    questionLine.textContent = currentQuestion.question;
    choicesLine.innerHTML = "";
    currentQuestion.choices.forEach(function(choice) {
       var choiceNode = document.createElement("button");
       choiceNode.setAttribute("class", "choice");
       choiceNode.setAttribute("value", choice);
       choiceNode.textContent = choice;
       choiceNode.onclick = checkAnswer;
       choiceNode.addEventListener("click", function () {
           console.log("I work!")
           console.log(choiceNode.value)
           console.log(event.target.value)
           console.dir(questionsArray[correctAnswer].answer)
           // if (event.target.value===answer)
           console.log("this worked!")
           if (event.target.value === questionsArray[correctAnswer].answer) {
            console.log("this worked!")
            currentIndex++
            correctAnswer++
            // move to next question
           }else {
                subtractTime();     
           }
       })
    choicesLine.appendChild(choiceNode);
    });
}

function checkAnswer() {

}

// display "GAME OVER" when TIMER hits zero


// Local Storage (high score, enter user initials)



