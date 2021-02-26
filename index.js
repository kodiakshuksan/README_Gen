//README Generator-index.js

//Import NPM package inquirer
const inquirer = require('inquirer');

//Import FS
const fs = require('fs');


//User Questions to gather info needed to complete README blank inputs
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Describe your project briefly',
        },
        {
            type: 'input',
            name: 'projectLink',
            message: 'What is your url for deployed application?',
        },
        {
            type: 'input',
            name: 'picText1',
            message: 'Describe first screenshot for user',
        },
        {
            type: 'input',
            name: 'pic1',
            message: 'What is file path for first screenshot?',
        },
        {
            type: 'input',
            name: 'picText2',
            message: 'Describe second screenshot for user',
        },
        {
            type: 'input',
            name: 'pic2',
            message: 'What is file path for the second screenshot?',
        },
        {
            type: 'checkbox',
            message: 'What technologies were used to complete this project?',
            name: 'technologiesUsed',
            choices: ['npm', 'CSS', 'JavaScript', 'JQuery', 'node.js'],
        },
        {
            type: 'input',
            name: 'creditText1',
            message: 'Describe your first resource',
        },
        {
            type: 'input',
            name: 'creditLink1',
            message: 'Provide link to a resource used to help in completing this application?',
        },
        {
            type: 'input',
            name: 'creditText2',
            message: 'Describe your second resource',
        },
        {
            type: 'input',
            name: 'creditLink2',
            message: 'Provide link to a resource used to help in completing this application?',
        },
        {
            type: 'checkbox',
            message: 'What License was used for this project?',
            name: 'licenseUsed',
            choices: ['[MIT License](license.txt)', '[Apache License](https://opensource.org/licenses/Apache-2.0)', '[ISC License](https://opensource.org/licenses/ISC)',],
        },

        {
            type: 'input',
            name: 'feature1',
            message: 'Describe main feature of application',
        },
        {
            type: 'input',
            name: 'userName',
            message: 'What is your gitHub user name',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'test1',
            message: 'Provide a test if any for your application',
        },
    ]);
// .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//         err ? console.log(err) : console.log('Success!')
//     ),
// });




// // TODO: Create a function to write README file
const generateMarkdown = (answers) =>
    ` #  ${answers.projectName} 

## ${answers.name}

## Description-
${answers.projectDescription}
## [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]   
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Technologies Used](#technologies_used)
4. [Credits](#credits)
5. [License](#license)
6. [Features](#features)
7. [Questions and Contributions](#questions_and_contributions)
8. [Tests](#tests)
        
##  Installation-

[Video Demonstration of Application](${answers.projectLink})
    
##  Usage- 

![${answers.picText1}](${answers.pic1})
![${answers.picText2}](${answers.pic2})


## Technologies Used-
${answers.technologiesUsed}

## Credits-  
[${answers.creditText1}](${answers.creditLink1})
[${answers.creditText2}](${answers.creditLink2})

## License-
### ${answers.licenseUsed}

## Features-
${answers.feature1}

## Questions and Contributions-  
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
### GitHub Profile: https://github.com/${answers.userName}
### Email: ${answers.email}

## Tests-  
${answers.test1} `;

const init = () => {
    promptUser().then((answers) => {
        try {
            const markdown = generateMarkdown(answers);
            fs.writeFileSync('mockREADME.md', markdown);
            console.log('Successfully wrote to mockREADME.md');
        } catch (error) {
            console.log(error);
        }
    });
};

init();


// const init = () => {
//     promptUser().then((answers) => {
//       try {
//         const html = generateHTML(answers);
//         fs.writeFileSync('index.html', html);
//         console.log('Successfully wrote to index.html');
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   };

//   init();



// 

//  }

// TODO: Create a function to initialize app
///function init() { }

// Function call to initialize app
//init();