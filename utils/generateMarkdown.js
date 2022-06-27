// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  const iscBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  const mozzillaBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"

  switch (license) {
    case license === "Apache 2.0":
      return apacheBadge;
    case license === "MIT":
      return mitBadge;
    case license === "ISC":
      return iscBadge;
    case license === "Mozilla Public License 2.0":
      return mozzillaBadge;
    default: 
    return "Unlicensed";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const mozillaLink = "![mozillaLink](https://opensource.org/licenses/MPL-2.0)"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return
`# ${data.title}

    ${renderLicenseBadge(data.license)}
  
## Description
    ${data.description}

## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Tests](#tests)
    * [Questions](#questions)
    * [Contribution](#contribution)
  
## Installation

  To install dependencies, run the following:

    \`
    ${data.installation}
    \`

## Usage

    ${data.usage}
    
## License
  Copyright (c) 
  ${renderLicenseBadge(data.license)}
  ${data.license}
  All rights reserved.

## Test
  ${data.test}

## Question
Any question related to the project, feel free to contact:
  ${data.email}

## Contribution
  ${data.contribution}

`;
}

module.exports = generateMarkdown;
