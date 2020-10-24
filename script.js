var timerCount = 100
var timerEle = document.querySelector("#timer")

timerEle.textContent = timerCount

//Timer Countdown
var timer = window.setInterval(function() {
    timerCount--;
    timerEle.textContent = timerCount

    if(timerCount === 0){
        clearInterval(timer)
    }
}, 1000)

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