var timerCount = 100
var timerEle = document.querySelector("#timer")
var startButton = document.querySelector("#startbutton")
var high = localStorage.getItem("highScore");
var highScore = 0

timerEle.textContent = timerCount

//question option variables 
var questionsPointer = 0

var question = document.querySelector("#question")
var optionA = document.querySelector("#optionA")
var optionB = document.querySelector("#optionB")
var optionC = document.querySelector("#optionC")
var optionD = document.querySelector("#optionD")
// var li = document.createElement("li");
// li.textContent =
// li.setAttribute("btn btn-info")
//Questions

var questions = [
    {
    q: "Which of these JavaScript interactions create a pop up box?", 
    choices: ["Prompt", "Confirm", "Alert", "All of the Above"], 
    a: "D"
    },
    {
    q: "What is the correct syntax for referring to an external script called 'xxx.js'?", 
    choices: ["<script src='xxx.js'>", "<script name='xxx.js'>", "<script href='xxx.js'>", "<script 'xxx.js'>"], 
    a: "A"
    },
    {
    q: "How do you start a for loop?", 
    choices: ["for i = 1 to 5", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for (i <= 5; i++)"], 
    a: "B"
    },
    {
    q: "How do you create a function in JavaScript?", 
    choices: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function.myFunction()"], 
    a: "A"
}]



function startQuiz() {
// Timer Countdown
var timer = window.setInterval(function() {
    timerCount--;
    timerEle.textContent = timerCount
    if(timerCount === 0){
        clearInterval(timer)
        alert("You have run out of time! Try again!")
        return
    }
}, 1000)
    if (questionsPointer === questions.length) {
        clearInterval(timer)
        alert("You are done with " + timerCount + " seconds left.")
        prompt("Enter your initials to record your highscore")
        return
    }

    console.log(timerCount)
    question.textContent = questions[questionsPointer].q
    optionA.textContent = questions[questionsPointer].choices[0]
    optionB.textContent = questions[questionsPointer].choices[1]
    optionC.textContent = questions[questionsPointer].choices[2]
    optionD.textContent = questions[questionsPointer].choices[3]
}
//Check if answer picked matches correct answer. If wrong subtract time.
optionA.addEventListener("click", function (){
    if (optionA.getAttribute("data-answer") === questions[questionsPointer].a){
    questionsPointer++
    startQuiz()
    } else {
        alert("wrong")
        timerCount -= 10
    }
})

optionB.addEventListener("click", function (){
    if (optionB.getAttribute("data-answer") === questions[questionsPointer].a){
    questionsPointer++
    startQuiz()
    } else {
        alert("wrong")
        timerCount -= 10
    }
})

optionC.addEventListener("click", function (){
    if (optionC.getAttribute("data-answer") === questions[questionsPointer].a){
    questionsPointer++
    startQuiz()
    } else {
        alert("wrong")
        timerCount -= 10
    }
})

optionD.addEventListener("click", function (){
    if (optionD.getAttribute("data-answer") === questions[questionsPointer].a){
    questionsPointer++
    startQuiz()
    } else {
        alert("wrong")
        timerCount -= 10
    }
})


//start button to kick things off 
startButton.onclick = startQuiz;