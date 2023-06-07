// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your application?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Give a description of your application:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'table of contents:',
      name: 'toc',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',  
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'checkbox',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        message: 'What licences are used?',
        name: 'license',
    }, 
    {
        type: 'input',
        message: 'Who are the contributers?',
        name: 'contributers',
    },
    {
        type: 'input',
        message: 'What tests are used?',
        name: 'tests',
    },
    {
        type: 'list',
        choices: ['phone', 'email'],
        message: 'Where would you like to be contacted for any questions?',
        name: 'questions',
    },
  ])
    .then((response) => {
        console.log(response);

    })
// TODO: Create a function to write README file
// function writeToFile('README.md', data) {}
.then((response) => 
fs.appendFile('README.md', JSON.stringify({'title': `${response.title}`, 'description': `${response.description}`, 'table of contents': `${response.toc}`}, null,2), (err) => console.log(err ? err : 'Success!')));
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
