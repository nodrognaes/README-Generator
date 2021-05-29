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
  
  
  
  ## Installation: ##
  
  ${data.projInstall}
  
  ## Usage: ##
  
  ${data.projUsage}
  
  ## License: ##
  
  ${data.licenses}
  
  ## Contributing: ##
  
  ${data.projContrib}
  
  ## Tests: ##
  
  ${data.projTest}
  
  ## Questions: ##
  
  [My Github](https://github.com/${data.github})

  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
