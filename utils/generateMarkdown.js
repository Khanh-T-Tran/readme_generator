// function returns license badges based on which license is passed in
// If there is no license, the default value is an empty string
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

// function to generate markdown for README rendering data from user answer and display them in readme using markdown template.
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
  * [Test](#test)
  * [Questions](#questions)
  * [Contribution](#contribution)
 
## Installation
    ${answers.installation}
    
## Usage
    ${answers.usage}
    
## License    
    ${answers.license}

## Test
    ${answers.test}

## Questions
    

Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />

Any question related to the project, feel free to contact:<br />
  - [khanhtuantran@outlook.com](mailto:${answers.questions})
  - [My github](https://github.com/Khanh-T-Tran)

## Contribution
  ${answers.contribute}

`;
};

module.exports = generateMarkdown;
