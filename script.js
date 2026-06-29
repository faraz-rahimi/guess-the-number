let randomNumber = Math.floor(Math.random() * 10) + 1
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("input");
let btn1 = document.getElementById("btn1");
let btn3 = document.getElementById("btn3");
let btn2 = document.getElementById("btn2");
let attemptsShow = document.getElementById("attemptsShow");
let attempts = 0;
const dateElement = document.getElementById("top-date");
const today = new Date();
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};
dateElement.textContent = today.toLocaleDateString("en-US", options);
btn1.addEventListener("click", function () {
    if (input.value === "") {
        paragraph.textContent = "Please enter a valid number!";
        return;
    };
    let userGuess = Number(input.value);
    if (userGuess < 1 || userGuess > 10) {
    paragraph.textContent = "Enter a number between 1 and 10";
    return;
    };
    attempts++;
    attemptsShow.textContent = "attempts" + ":" + attempts;
    if (randomNumber === userGuess) {
        paragraph.textContent = "Good job, correct!";
    }else if(randomNumber > userGuess){
        paragraph.textContent = "too low and it's wrong. Please try again"
    }else if(randomNumber < userGuess){
        paragraph.textContent = "too high and it's wrong. Please try again"
    }
});
btn3.addEventListener("click", function (){
    randomNumber = Math.floor(Math.random() * 10) + 1
    input.value = ""
    attemptsShow.textContent = "attempts:" + "" + "0"
    attempts = 0;
    document.getElementById("paragraph").textContent = "guess now!"
});
btn2.addEventListener("click", function (){
    input.value = ""
    document.getElementById("paragraph").textContent = "guess now!"
});
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btn1.click();
    }
});