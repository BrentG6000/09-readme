function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case 'Apache License 2.0':
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]${ renderLicenseLink(license) }`;
      break;
    case 'GNU General Public License v3.0':
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]${ renderLicenseLink(license) }`;
      break;
    case 'MIT License':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]${ renderLicenseLink(license) }`;
      break;
    case 'BSD 2-Clause "Simplified" License':
      badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]${ renderLicenseLink(license) }`;
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]${ renderLicenseLink(license) }`;
      break;
    case 'Boost Software License 1.0':
      badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]${ renderLicenseLink(license) }`;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      badge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]${ renderLicenseLink(license) }`;
      break;
    case 'Eclipse Public License 2.0':
      badge = `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)]${ renderLicenseLink(license) }`;
      break;
    case 'GNU Affero General Public License v3.0':
      badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]${ renderLicenseLink(license) }`;
      break;
    case 'GNU General Public License v2.0':
      badge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]${ renderLicenseLink(license) }`;
      break;
    case 'GNU Lesser General Public License v2.1':
      badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)]${ renderLicenseLink(license) }`;
      break;
    case 'Mozilla Public License 2.0':
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]${ renderLicenseLink(license) }`;
      break;
    case 'The Unlicense':
      badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]${renderLicenseLink(license) }`;
      break;
    default:
      badge = '';
  }
  return badge;
}

function renderLicenseLink(license) {
  let link;
  switch (license) {
    case 'Apache License 2.0':
      link = '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License v3.0':
      link = '(https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MIT License':
      link = '(https://opensource.org/licenses/MIT)';
      break;
    case 'BSD 2-Clause "Simplified" License':
      link = '(https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      link = '(https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Boost Software License 1.0':
      link = '(https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      link = '(http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case 'Eclipse Public License 2.0':
      link = '(https://opensource.org/licenses/EPL-2.0)';
      break;
    case 'GNU Affero General Public License v3.0':
      link = '(https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'GNU General Public License v2.0':
      link = '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case 'GNU Lesser General Public License v2.1':
      link = '(https://www.gnu.org/licenses/lgpl-2.1)';
      break;
    case 'Mozilla Public License 2.0':
      link = '(https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'The Unlicense':
      link = '(http://unlicense.org/)';
      break;
    default:
      link = '';
  }
  return link;
}

function renderLicenseSection(license) {
  let licenseName = '';
  if (license != 'none') {
    licenseName = license;
  }
  
  return `## License

${licenseName}
`
}

function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);

  return `# ${ data.title }
${ badge }

## Description

${ data.description }

## Table of Contents

[Installation](https://github.com/${ data.username }/${ data.title }#Installation)

[Usage](https://github.com/${ data.username }/${ data.title }#Usage)

[How to Contribute](https://github.com/${ data.username }/${ data.title }#How-to-contribute)

[Tests](https://github.com/${ data.username }/${ data.title }#Tests)

[Questions](https://github.com/${ data.username }/${ data.title }#Questions)

## Installation

${ data.installation }

## Usage

${ data.usage }

${renderLicenseSection(data.license)}

## How to Contribute

${ data.contribute }

## Tests

${ data.test }

## Questions

If you have any questions, email me at ${ data.email }


GitHub link:
https://github.com/${ data.username }

`
  };

module.exports = generateMarkdown;