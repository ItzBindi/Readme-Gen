
function genreadme(response) {
    return `
# ${response.title}

## Description
${response.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Licenses](#licenses)
- [Contribution](#contribution)
- [Tests](#test)
- [Questions](#Questions)

## Installation
${response.installation}

## Usage
${response.usage}

## Licenses
[![License](https://img.shields.io/badge/License-${response.license}-green.svg)](https://opensource.org/licenses/${response.license})

## Contribution
${response.contributers}

## Tests
${response.tests}

## Questions
Questions can be directed to ${response.email} or https://github.com/${response.github}


`
}

module.exports = genreadme;