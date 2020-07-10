const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fileName = "README.md";


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is a description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "List installation instruction for your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "What can your project be used for?",
        name: "usage"
    },
    {
        type: "list",
        message: "Choose a license for your project.",
        name: "license",
        choices: [
            "MIT License",
            "Apache License",
            "GPL License",
            "None of the above"
        ]
    },
    {
        type: "input",
        message: "What are some contribution guidlines for your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are some test instructions for your project?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    markdownData = generateMarkdown(data);
    fs.writeFile(fileName, markdownData, function (err) {
        if (err)
        throw (err);
        console.log("You've successfully generated a README!")
    })
}

// writeToFile();

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        writeToFile(fileName, data);
    })

};


// function call to initialize program
init();
