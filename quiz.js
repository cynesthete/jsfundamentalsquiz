// START BUTTON that starts timer on click
var startButton = document.getElementById("generate")
var timeClock = document.getElementById("clock-timer")
var timer = document.getElementById("timer")
var questionLine = document.getElementById("question")
var choicesLine = document.getElementById("choices")

var correctAnswer = 0;
var currentIndex = 0;

var timeKeeper = 100;
//var currentIndex = 0;
var gameTimer;

// Questions + Choices
var questionsArray = [
    {
        question: "Which of the following is NOT a JS data type?",
        choices: [
            "String", "Number", "Object", "Syntax"
        ],
        answer: "Syntax"
    },
    {
        question: "What does DOM stand for?",
        choices: [
            "Don't Order More", "Document Oriented Meaning", "Document Object Model", "Do Orbs Multiply"
        ],
        answer: "Document Object Model"
    },
    {
        question: "Which of these is NOT a loop?",
        choices: [
            "For", "While", "Do While", "Will Do"
        ],
        answer: "Will Do"
    },
    {
        question: "In a for loop, which of the following is a condition?",
        choices: [
            "var i =0", "i < 19", "i++", "&&"
        ],
        answer: "i < 19"
    },
    {
        question: "What property of a NodeList reveals the number of elements?",
        choices: [
            "Length", "Element", "Total", "Tag"
        ],
        answer: "Length"
    },
    {
        question: "Which of the following is NOT a logical operator?",
        choices: [
            "&&", "||", "~", "!"
        ],
        answer: "~"
    },
    {
        question: "Which of the following is NOT a comparison operator?",
        choices: [
            ">", "!=", "&&", "!=="
        ],
        answer: "&&"
    },
    {
        question: "Which of the following is most similar to a function?",
        choices: [
            "Operator", "Method", "DOM", "API"
        ],
        answer: "Method"
    },
    {
        question: "Arrays are __?",
        choices: [
            "Unruly", "Methods", "Objects", "Booleans"
        ],
        answer: "Objects"
    },
    {
        question: "Which of the following can be used to trigger a function?",
        choices: [
            "Lemurs", "Returns", "Magic", "Events"
        ],
        answer: "Events"
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
    var currentQuestion = questionsArray[currentIndex];
    questionLine.textContent = currentQuestion.question;
    choicesLine.innerHTML = "";
    currentQuestion.choices.forEach(function(choice) {
       var choiceNode = document.createElement("button");
       choiceNode.setAttribute("class", "choice");
       choiceNode.setAttribute("value", choice);
       choiceNode.textContent = choice;
       choiceNode.onclick = checkAnswer;

    choicesLine.appendChild(choiceNode);
    });
}

function checkAnswer() {
    if (this.value === questionsArray[currentIndex].answer) {
        console.log("this worked!")
        currentIndex++
        correctAnswer++
        populateQuestions();
       }else {
            subtractTime(); 
            currentIndex++;
            populateQuestions();    
       }
   };

// display "GAME OVER" when TIMER hits zero


// Local Storage (high score, enter user initials)



