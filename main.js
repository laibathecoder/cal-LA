#! /usr/bin/env node
//Command Line Calculator:
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your First number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Select one Operator to perfome a Opration",
        type: "list",
        name: "operator",
        choices: ["Addition", "Multiplication", "Subtraction", "Division"]
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select correct operator");
}
