const prompt = require("prompt-sync")()

console.log("Welocome to the Computer Hardware quiz!")

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt("What is the brain of the computer? ");
const correctAnswer1 = "CPU";

if (answer1.toUpperCase() === correctAnswer1) {
    console.log("You go it correct!");
    correctAnswers++;
}else {
    console.log("You go it wrong...");
}

const answer2 = prompt("What is better a 3090ti or a 4060? ");
const correctAnswer2 = "3090ti";

if (answer2.toLowerCase() === correctAnswer2) {
    console.log("You go it correct!");
    correctAnswers++;
}else {
    console.log("You go it wrong...");
}

const answer3 = prompt("What is the reccomended amount of RAM in 2024? ");
const correctAnswer3 = "16GB";

if (answer3.toUpperCase() === correctAnswer3) {
    console.log("You go it correct!");
    correctAnswers++;
}else {
    console.log("You go it wrong...");
}

const answer4 = prompt("What is the chemical name for gold? ");
const correctAnswer4 = "AU";

if (answer4.toUpperCase() === correctAnswer4) {
    console.log("You go it correct!");
    correctAnswers++;
}else {
    console.log("You go it wrong...");
}

const percent = Math.round((correctAnswers / totalQuestions) * 75);

console.log("You got", correctAnswers, "questions correct, Awesome Job!!!!")
console.log("Your score was", percent.toString() + "%");