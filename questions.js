    const questions = [
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
        message: 'What tests are used, if any?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your email to be contacted for any questions?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub username for any questions?',
        name: 'github',
    }
  ]

  module.exports = questions;