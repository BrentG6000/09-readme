const inquirer = require('inquirer');
const fs = require('fs');
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
    },];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            let badge;
            switch (data.license) {
                case 'Apache License 2.0':
                    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
                    break;
                case 'GNU General Public License v3.0':
                    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
                    break;
                case 'MIT License':
                    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
                    break;
                case 'BSD 2-Clause "Simplified" License':
                    badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
                    break;
                case 'BSD 3-Clause "New" or "Revised" License':
                    badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
                    break;
                case 'Boost Software License 1.0':
                    badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
                    break;
                case 'Creative Commons Zero v1.0 Universal':
                    badge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
                    break;
                case 'Eclipse Public License 2.0':
                    badge = '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
                    break;
                case 'GNU Affero General Public License v3.0':
                    badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
                    break;
                case 'GNU General Public License v2.0':
                    badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
                    break;
                case 'GNU Lesser General Public License v2.1':
                    badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)';
                    break;
                case 'Mozilla Public License 2.0':
                    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
                    break;
                case 'The Unlicense':
                    badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
                    break;
                default:
                    badge = '';
            }


            let index = `# ${data.title}
${badge}

## Description

${data.description}

## Table of Contents



## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## How to Contribute

${data.contribute}

## Tests

${data.test}

## Questions

`
            return index;
        })
        .then(index => writeToFile('README.md', index));
}

init();