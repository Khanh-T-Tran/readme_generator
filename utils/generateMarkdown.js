// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  const iscBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  const mozzillaBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

  switch (license) {
    case "Apache 2.0":
      return apacheBadge;
      break;
    case "MIT":
      return mitBadge;
      break;
    case "ISC":
      return iscBadge;
      break;
    case "Mozilla Public License 2.0":
      return mozzillaBadge;
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  const apacheLink = "(License)(https://opensource.org/licenses/Apache-2.0)"
  const mitLink = "https://opensource.org/licenses/MIT"
  const iscLink = "https://opensource.org/licenses/ISC"
  const mozzillaLink = "https://opensource.org/licenses/MPL-2.0"
  switch (license) {
    case "Apache 2.0":
      return apacheLink;
      break;
    case "MIT":
      return mitLink;
      break;
    case "ISC":
      return iscLink;
      break;
    case "Mozilla Public License 2.0":
      return mozzillaLink;
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return`${renderLicenseLink(license)}`
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = answers => {
  console.log(answers);
  return `
# ${answers.title}
  ${renderLicenseBadge(answers.license)}
  
## Description
    ${answers.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Contribution](#contribution)
 
## Installation

  To install dependencies, run the following: 
    ${answers.installation}
    
## Usage
    ${answers.usage}
    
## License    
    ${answers.license}

## Test
    ${answers.test}

## Question
${answers.questions}
<br />
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />

Any question related to the project, feel free to contact:
  ${answers.email}

## Contribution
  ${answers.contribute}

`;
};

const mockData = {
  title: 'title',
  description: 'description',
  installation: 'installation',
  usage: 'usage',
  license: 'license',
  license: 'license',
  test: 'test',
  email: 'email',
  contribute: 'contribute',
};

module.exports = generateMarkdown;
