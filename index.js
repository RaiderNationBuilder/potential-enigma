// TODO: Include packages needed for this application
var inquirer = require('inquirer')
var generateMarkdown = require('./utils/generateMarkdown')
var fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the projects name?"
    },
    {
        type: "list",
        name: "license",
        choices: ["mit","creative commons"],
        message: "pick a license"
    },
    {
        type: "input",
        name: "description",
        message: "what is a good description of the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "how do you install the project?"
    },
    {
        type: "input",
        name: "usage",
        message: "how do you use this project?"
    },
    {
        type: "input",
        name: "contributions",
        message: "who all contributed to this project?"
    },
    {
        type: "input",
        name: "testing",
        message: "how do you test this project?"
    },
];


// TODO: Create a function to write README file DONE!
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(err)
    })
}

// TODO: Create a function to initialize app DONE!
function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            console.log(answers)
            var fakeReadme = generateMarkdown(answers)
            console.log(fakeReadme)
            writeToFile("readme.md", fakeReadme)            
        })
}

// Function call to initialize app DONE
init();
