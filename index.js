// get inquirer and fs file system and declare in variables
const inquirer = require("inquirer");
const fs = require('fs');  // The built in file system module
const generateMarkdown = require("./utils/generateMarkdown");
const { json } = require("stream/consumers");

// Array of questions to use with inquirer
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: "input",
        message: "What is the purpose of this application?",
        name: "description"
    },
    {
        type: "list",
        message: "What license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "Apache 2.0",
            "ISC",
            "Unlicensed",
            "Mozilla Public License 2.0"

        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What is the usage of the app?",
        name: "usage",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test",
        default: "npm run test"
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        message: "Any question related to the project, feel free to contact:",
        name: "questions"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repository?",
        name: "contribute"
    },

];

// function to prompt user to returns answers object
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            fs.writeFile("./demo/README.md", generateMarkdown(answers), err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("README file successfully created!");
                }
            });
        })
}

// Function call to initialize application/program
init();
