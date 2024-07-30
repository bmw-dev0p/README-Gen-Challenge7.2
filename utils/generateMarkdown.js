// TODO: Create a function that returns a license badge based on which license is passed in. If there is no license, return an empty string
//This is the 2nd stop in the function train. It creates the badge.
function renderLicenseBadge(license) {
  if (license) {
      return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]${renderLicenseLink(license)}`; // Return the badge URL if a valid license is provided
    }
     else {
    return ''; // Return an empty string if no license or invalid license is provided
  }
}

// my function to render the git badge
function renderGitBadge(url) {
  if (url) {
    return `[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](${url})`;
  } else {
    return ''; 
  }
}

// my function to render the code badges
// not gonna lie, copilot helped here xD
function renderCodeBadge(lang) {
  if (lang) {
    return lang.map(lang => codingBadges[lang]).join('\n'); 
  } else {
    return ''; 
  }

}

//my function to render the framework badges
 function renderFrameBadge(frame) {
  if (frame) {
    return frame.map(frame => codingBadges[frame]).join('\n'); 
  }
  else {
    return '';
  }
 }

// TODO: Create a function that returns the license link. If there is no license, return an empty string
//this is the third nested function. It simply creates the link for the license.
function renderLicenseLink(license) {
  if (license) {
    return `(https://opensource.org/licenses/${license})`; // Return the license link if a valid license is provided
  } else {
    return ''; // Return an empty string if no license or invalid license is provided
  }
}

// TODO: Create a function that returns the license section of README. If there is no license, return an empty string
//this is the first function called in the generateMarkdown function.
//it creates the entire license section, with title, badge, and description.
function renderLicenseSection(license) {
  if (license) {
    return `## License / Badges:\n${renderLicenseBadge(license)} 
    \nThis project is licensed under the ${license} license. Click the badge for more information.`; // Return the license section of README if a valid license is provided
  } else {
    return ''; // Return an empty string if no license or invalid license is provided
  }
}

// TODO: Create a function to generate markdown for README
//this function is passed "data" = answers object from the inquirer prompt.
function generateMarkdown(data) {
  //README template starts here
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
  * [License](#license)
  * [Credits](#credits)
  ## Installation: 
  ${JSON.stringify(data.install)}
  ## Usage:
  ${JSON.stringify(data.usage)}
  ## Features:
  ### Coding Language(s): \n${renderCodeBadge(data.lang)}\n${(data.lang).join(', ')}\n### Framework(s): \n${renderFrameBadge(data.frame)}\n${(data.frame).join(', ')}\n### Other Features: \n${(data.features)}
  ${renderLicenseSection(data.license)}
  ## Credits:\n${renderGitBadge(data.credits)}\n${JSON.stringify(data.author)}'s Github Portfolio
  `;
}

export default generateMarkdown;

// my object to render the code badges
const codingBadges = {
  HTML: "![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)",
  CSS: "![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)",
  Javascript: "![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)",
  Java: "![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)",
  Python: "![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)",
  "C#":  "![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white)",
  "C++" : "![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)",
  Ruby: "![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)",
  Bootstrap: "![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)",
  "Node.js": "![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)",
  NPM: "![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)",
  React: "![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)",
}

