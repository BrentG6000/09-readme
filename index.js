const inquirer = require('inquirer');
const fs = require('fs');
const genMark = require('./utils/generateMarkdown');
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },
    {
        type: 'input',
        message: 'Enter a description of the project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose the license for this project',
        name: 'license',
        choices: [
            'none',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ],
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            return genMark(data);
        })
        .then(markDown => writeToFile('README.md', markDown));
}

init();