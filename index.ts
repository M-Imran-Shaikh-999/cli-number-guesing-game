#! /usr/bin/env node
import inquirer from "inquirer"

const randomNumber =  Math.floor(Math.random() * 10 + 1);

const answers = await inquirer .prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-10:",
}
])
console.log(answers);
if (answers.userGuessdNumber === randomNumber) {
    console.log("Congratulation! you guessed right number.");
} else {
console.log("you guessed wrong number");
}