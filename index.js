// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projTitle",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "projDescription",
        message: "Write a description about your project:"
    },
    {
        type: "input",
        name: "projInstall",
        message: "What are the project's installation instructions?"
    },
    {
        type: "input",
        name: "projUsage",
        message: "What is the project's usage information?"
    },
    {
        type: "input",
        name: "projContrib",
        message: "What are the project's contribution guidelines?"
    },
    {
        type: "input",
        name: "projTest",
        message: "What are the project's test instructions?"
    },
    {
        type: "list",
        name: "licenses",
        message: "Which license are you using?",
        choices: ["MIT", "APACHE", "IBM", "ECLIPSE", "PERL", "BOOST", "MOZILLA", "UNILICENSE", "WTFPL"]
    },
    {
        type: "input",
        name: "github",
        message: "What is yout Github username?"
    },    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(
        (response) => {
            console.log("Your readME is being created.......");
            writeToFile("README.md", generateMarkdown({ ...response }))
        }
    )
}

// Function call to initialize app
init();
