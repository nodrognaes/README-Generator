// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github Badge](https://img.shields.io/badge/license-${data.license}-blue.svg)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `![Github License].`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `![Github License].`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projTitle} #

  ## Description: ##
  
  ${data.projDescription}
  
  ## Table of Contents: ##
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## <a name="installation"></a>Installation: ##
  
  ${data.projInstall}
  
  ## <a name="usage"></a>Usage: ##
  
  ${data.projUsage}
  
  ## <a name="license"></a>License: ##
  
  ${data.licenses}
  
  ## <a name="contributing"></a>Contributing: ##
  
  ${data.projContrib}
  
  ## <a name="tests"></a>Tests: ##
  
  ${data.projTest}
  
  ## <a name="questions"></a>Questions: ##
  
  Github: [https://github.com/${data.github}](https://github.com/${data.github})

  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
