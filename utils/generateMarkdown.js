// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// const badges = {
//   MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
//   Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-red.svg)](https://opensource.org/licenses/Apache-2.0)',
//   GPL: '[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
//   BSD: '[![License: BSD](https://img.shields.io/badge/License-BSD-green.svg)](https://opensource.org/licenses/BSD-3-Clause)',
//   OpenSource: '[![License: OpenSource](https://img.shields.io/badge/License-OpenSource-orange.svg)](https://opensource.org/licenses/)'
//   // Add more licenses and their badge URLs here
// };

function renderLicenseBadge(license) {
  if (license) {
      return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]${renderLicenseLink(license)}`; // Return the badge URL if a valid license is provided
    }
     else {
    return ''; // Return an empty string if no license or invalid license is provided
  }
}

function renderGitBadge(url) {
  if (url) {
    return `[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](${url})`;
  } else {
    return ''; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `(https://opensource.org/licenses/${license})`; // Return the license link if a valid license is provided
  } else {
    return ''; // Return an empty string if no license or invalid license is provided
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License / Badges:\n${renderLicenseBadge(license)} 
    \nThis project is licensed under the ${license} license. Click the badge for more information.`; // Return the license section of README if a valid license is provided
  } else {
    return ''; // Return an empty string if no license or invalid license is provided
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${JSON.stringify(data.title)} 
  Created By: ${JSON.stringify(data.author)} 
  ## Description:
  ${JSON.stringify(data.descript1)}
  ${JSON.stringify(data.descript2)}
  ${JSON.stringify(data.descript3)}
  ${JSON.stringify(data.descript4)}
  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  ## Installation: 
  ${JSON.stringify(data.install)}
  ## Usage:
  ${JSON.stringify(data.usage)}
  ## Features:
  ### Coding Languages: \n${(data.lang).join(', ')}\n### Framework(s): \n${(data.frame).join(', ')}\n### Features: ${(data.features)}
  ${renderLicenseSection(data.license)}
  ## Credits:\n${renderGitBadge(data.credits)}\n${JSON.stringify(data.author)}'s Github Portfolio
  `;
}


export default generateMarkdown;
