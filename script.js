var timerCount = 100
var timerEle = document.querySelector("#timer")
var startButton = document.querySelector("#startbutton")


timerEle.textContent = timerCount


//Questions

var questions = [
    {
    q: "What are all the types of Pop up boxes available in JavaScript?", 
    choices: ["Prompt", "Confirm", "Alert", "All of the Above"], 
    a: "D"
    },
    {
    q: "What is the correct syntax for referring to an external script called 'xxx.js'?", 
    choices: ["<script src='xxx.js'>", "<script name='xxx.js'>", "<script href='xxx.js'>"], 
    a: "A"
    },
    {
    q: "How does a for loop start?", 
    choices: ["for i = 1 to 5", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for (i <= 5; i++)"], 
    a: "B"
    },
    {
    q: "How do you create a function in JavaScript?", 
    choices: ["function myFunction()", "function:myFunction()", "function = myFunction()"], 
    a: "A"
}]

//question option variables 
var questionsPointer = 0

var question = document.querySelector("#question")
var optionA = document.querySelector("#optionA")
var optionB = document.querySelector("#optionB")
var optionC = document.querySelector("#optionC")
var optionD = document.querySelector("#optionD")

function setQuestions() {
// Timer Countdown
var timer = window.setInterval(function() {
    timerCount--;
    timerEle.textContent = timerCount
    if(timerCount === 0){
        clearInterval(timer)
        alert("You have run out of time! Here is your score" + score)
        return
    }
}, 1000)
    if (questionsPointer === questions.length) {
        clearInterval(timer)
        alert("You are done with " + timerCount + " seconds left.")
        return
    }

    console.log(timerCount)
    question.textContent = questions[questionsPointer].q
    optionA.textContent = questions[questionsPointer].choices[0]
    optionB.textContent = questions[questionsPointer].choices[1]
    optionC.textContent = questions[questionsPointer].choices[2]
    optionD.textContent = questions[questionsPointer].choices[3]
}
//Running the questions & subtracting time from timer


//Check if answer picked matches correct answer. If wrong subtract time.
optionA.addEventListener("click", function (){
    if (optionA.getAttribute("data-answer") === questions[questionsPointer].a){
    questionsPointer++
    setQuestions()
    } else {
        alert("wrong")
        timerCount -= 10
    }
})

optionB.addEventListener("click", function (){
    if (optionB.getAttribute("data-answer") === questions[questionsPointer].a){
    questionsPointer++
    setQuestions()
    } else {
        alert("wrong")
        timerCount -= 10
    }
})

optionC.addEventListener("click", function (){
    if (optionC.getAttribute("data-answer") === questions[questionsPointer].a){
    questionsPointer++
    setQuestions()
    } else {
        alert("wrong")
        timerCount -= 10
    }
})

optionD.addEventListener("click", function (){
    if (optionD.getAttribute("data-answer") === questions[questionsPointer].a){
    questionsPointer++
    setQuestions()
    } else {
        alert("wrong")
        timerCount -= 10
    }
})


//start button to kick things off 
startButton.onclick = setQuestions;