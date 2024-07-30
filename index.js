// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
//be sure to import the generateMarkdown function from the utils folder.
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const data = [ {
    type: 'input',
    message: 'Welcome to my README Generator!  \nPlease refer to the provided README for a template and operating instructions. \nWhat is your name?',
    name: 'author'
},
{
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'Provide a short description explaining the what, why, and how of your project. \nDescription Q1 - What was your motivation?',
    name: 'descript1',
},
{
    type: 'input',
    message: 'Description Q2- Why did you build this project?',
    name: 'descript2',
},
{
    type: 'input',
    message: 'Description Q3- What problem does it solve?',
    name: 'descript3',
},
{
    type: 'input',
    message: 'Description Q4- What did you learn?',
    name: 'descript4',
},
{
    type: 'checkbox',
    message: 'What language(s) did your project use?',
    name: 'lang',
    choices: ['HTML', 'CSS', 'Javascript', 'Python', 'Java', 'C#', 'C++', 'Ruby', 'Other']
},
{
    type: 'checkbox',
    message: 'What framework(s) did you use?',
    name: 'frame',
    choices: ['Bootstrap', 'Node.js', 'NPM', 'React', 'API(s)', 'Other Libraries', 'None'],
},
{
    type: 'input',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Hint: You can wrap code blocks in three backticks ` ` ` to format code.)',
    name: 'install',
},
{
    type: 'input',
    message: 'Usage: Provide an example for use.',
    name: 'usage',
},
{
    type: 'input',
    message: 'Provide a link to your Github portfolio, if you have one.',
    name: 'credits',
},
{
    type: 'input',
    message: 'If your project has any additional features, list them here.',
    name: 'features',
},
{
    type: 'input',
    message: 'Does your project have a license? This lets other developers know what they can and cannot do with your project. \nNote:Please type the exact SPDX ID of the license you would like to use. \nFor example, "General Public License version 3" is "GPL-3.0".\nPlese refer to the following link for more information: https://opensource.org/licenses',
    name: 'license',
    // choices: ['MIT', 'Apache', 'GPL', 'BSD', 'OpenSource', 'Other', 'None'],
},
];


// TODO: Create a function to write README file
//function is passed "fileName"(string) and "data"(inquirer questions).
function writeToFile(fileName, data) {
    inquirer.prompt(data)
    .then(function(answers){ //could also be wrote with =>, but this helped distinguish lines of code
    console.log(`Inquirer then activated`), //sanity check
    fs.writeFile(`./generatedContent/${fileName}.md`, generateMarkdown(answers), //writes to own folder to seperate from provided README
    (err) => err ? console.log(err) :console.log('file written!'))})
    .catch((error) => console.log(error));

}

// TODO: Create a function to initialize app
function init() {
    writeToFile('YOUR-README.md', data);
}

// Function call to initialize app
init();
