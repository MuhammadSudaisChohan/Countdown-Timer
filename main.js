import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word :"
    }
]);
const word = answer.Sentence.trim().split(" ");
console.log(`Your sentence length is ${word.length}`);
