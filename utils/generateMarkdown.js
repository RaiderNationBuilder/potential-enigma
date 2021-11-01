// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "mit") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "creative commons") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "mit") {
    return "https://opensource.org/licenses/MIT"
  } else if (license === "creative commons") {
    return "http://creativecommons.org/publicdomain/zero/1.0/"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseBadge(license)}

  ${renderLicenseLink(license)}
  `
}

// function renderDescription(description) {
//   return `
//   ${data.description}
//   `
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  ${data.title}

  # License
  ${renderLicenseSection(data.license)}

  # Description:
  ${data.description}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contributions
  ${data.contributions}

  # Testing
  ${data.testing}
`
  console.log(data);
}

module.exports = generateMarkdown

