// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genReadMe = require('./genreadme');
const questions = require('./questions');
// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt(questions)
  .then((response) => {
    // .then(({name}) => {
    console.log(response);
    fs.writeFile('README.md', genReadMe(response), function (err) {
        err ? console.log(err) : console.log("success");
    })
})
// TODO: Create a function to write README file
// function writeToFile('README.md', data) {}
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
