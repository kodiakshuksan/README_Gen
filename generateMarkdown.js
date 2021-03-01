// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const inquirer = require('inquirer');

//Import FS
const fs = require('fs');
function renderLicenseBadge(licenseUsed) {

    if (licenseUsed == "MIT License") {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    } else if (licenseUsed == "Apache License") {
        badge = "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    } else if (licenseUsed == "ISC License") {
        badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
    }
    else {
        return "";
    }
    return badge;
};





// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(licenseUsed) {

    if (licenseUsed == "MIT License") {

        link = "[![License: MIT]](https://opensource.org/licenses/MIT)";
    }
    else if (licenseUsed == 'Apache License') {
        link = "[![License: Apache](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (licenseUsed == 'ISC License') {
        link = "[![License: ISC](https://opensource.org/licenses/ISC)";
    }
    else {
        return "";
    }
    return link;
};


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string


function renderLicenseSection(licenseUsed) {

    if (licenseUsed == 'MIT License') {
        section = '[License](#license)';
    }

    else if (licenseUsed == 'Apache License') {
        section = '[License](#license)';
    }
    else if (licenseUsed == 'ISC License') {
        section = '[License](#license)';
    }
    else {
        return '[License](#license)';

        return section;
    };


    //[Installation](#installation)
    // // TODO: Create a function to generate markdown for README //Returning object like the question and answer json object string?
    // TODO: Create a function to generate markdown for README

    //README Generator-index.js

    //Import NPM package inquirer
    // const inquirer = require('inquirer');

    // //Import FS
    // const fs = require('fs');



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
            }
        ])

}

const generateMarkdown = (data) =>
    `# ${data.projectName} 
## ${data.name}

## Description-
### ${data.projectDescription}
#### ${renderLicenseBadge(data.licenseUsed, data.badge)} 
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

[Video Demonstration of Application](${data.projectLink})
    
##  Usage- 

![${data.picText1}](${data.pic1})
![${data.picText2}](${data.pic2})


## Technologies Used-
${data.technologiesUsed}

## Credits-  
[${data.creditText1}](${data.creditLink1})
[${data.creditText2}](${data.creditLink2})

## License-

###${renderLicenseLink(data.licenseUsed, data.link)} 

## Features-
${data.feature1}

## Questions and Contributions-  
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
### GitHub Profile: https://github.com/${data.userName}
### Email: ${data.email}

## Tests- 
${data.test1}`;

// const init = () => {
//     promptUser().then.data
//     try {
//         const markdown = generateMarkdown(data);
//         fs.writeFileSync('mockREADME.md', markdown);
//         console.log('Successfully wrote to mockREADME.md');
//     } catch (error) {
//         console.log(error);
//     }
// }
// //init();

module.exports = generateMarkdown;
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



