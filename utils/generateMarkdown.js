// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badges = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  // Add more licenses and their badge URLs here
};

function renderLicenseBadge(license) {
  if (license) {
      return badges[license]; // Return the badge URL if a valid license is provided
    }
     else {
    return ''; // Return an empty string if no license or invalid license is provided
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${JSON.stringify(data.title)} 
  Created By: ${JSON.stringify(data.author)} 
  ## Description:
  ${JSON.stringify(data.descript1)}
  ${JSON.stringify(data.descript2)}
  ${JSON.stringify(data.descript3)}
  ${JSON.stringify(data.descript4)}
  ## Table of Contents:
  * [Installation](##installation)
  * [Usage](##usage)
  * [Credits](##credits)
  * [License](##license)
  ## Installation: 
  ${JSON.stringify(data.install)}
  ## Usage:
  ${JSON.stringify(data.usage)}
  ## Credits:
  ${JSON.stringify(data.credits)}
  Coding Languages: ${data.lang[0]}`
  // `Frameworks: ${(data.frame)}`, 
  // `![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](${JSON.stringify(data.git)})`
}

export default generateMarkdown;
