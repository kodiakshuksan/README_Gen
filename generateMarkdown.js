// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseUsed) {

    if (licenseUsed = MIT) {
        licenseUsed = [![licenseUsed = MIT](https: / / img.shields.io / badge / License - MIT - yellow.svg)](https: opensource.org / licenses / MIT);
    } else if (licenseUsed = Apache) {
        licenseUsed = [![licenseUsed = Apache](https: / / img.shields.io / badge / License - Apache % 202.0 - blue.svg)](https: opensource.org / licenses / Apache - 2.0);
    } else (licenseUsed) = ISC) {
        licenseUsed = [![licenseUsed = ISC](https: img.shields.io / badge / License - ISC - blue.svg)](https: opensource.org / licenses / ISC)
    }

    if (!licenseUsed) {
        return ",";
    }
};




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseUsed) {

    if (licenseUsed = MIT) {

        licenseUsed = [![License: MIT]](https: opensource.org / licenses / MIT);
    }

    if (licenseUsed = Apache) {
        licenseUsed = [![License: Apache](https: opensource.org / licenses / Apache - 2.0);
    }
    if (licenseUsed = ISC) {
        licenseUsed = [![License: ISC](https: opensource.org / licenses / ISC);
    }


    if (!licenseUsed) {
        return ","
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseUsed) {

    if (licenseUsed = MIT) {
        licenseUsed = [![License: MIT]](https: opensource.org / licenses / MIT);
    }

    if (licenseUsed = Apache) {
        licenseUsed = [![License: Apache](https: opensource.org / licenses / Apache - 2.0);
    }
    if (licenseUsed = ISC) {
        licenseUsed = [![License: ISC](https: opensource.org / licenses / ISC);
    }

    if (!licenseUsed) {
        return ",";
    }
};



// TODO: Create a function to generate markdown for README //Returning object like the question and answer json object string?
function generateMarkdown(data) {

    //Import NPM package inquirer
    const inquirer = require('inquirer');

    //Import FS
    const fs = require('fs');

    const generateMarkdown = require('./generateMarkdown.js');

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
                name: 'pic1',
                message: 'What is file path for first screenshot?',
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
                choices: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'node.js'],
            },
            {
                type: 'input',
                name: 'creditLink1',
                message: 'Provide link to a resource used to help in completing this application?',
            },
            {
                type: 'input',
                name: 'creditLink2',
                message: 'Provide link to a resource used to help in completing this application?',
            },
            {
                type: 'input',
                name: 'creditLink3',
                message: 'Provide link to a resource used to help in completing this application?',
            },
            {
                type: 'checkbox',
                message: 'What License was used for this project?',
                name: 'licenseUsed',
                choices: ['MIT', 'Apache', 'ISC'],
            },
            {
                type: 'input',
                name: 'feature1',
                message: 'Describe main feature of application',
            },
            {
                type: 'input',
                name: 'userName',
                message: 'What is your gitHub user url?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },
            {
                type: 'input',
                name: 'test1',
                message: 'Provide a test if any for your application.',
            },
        ]);
    .then((data) => {
            const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

            fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
                err ? console.log(err) : console.log('Success!')
            ),

        return (`# ${data.projectName}
    ## ${data.name}
    ## Description-${data.projectDescription}
              
    ## Table of Contents
      1. Installation
      2. Usage
      3. Technologies Used
      4. Credits
      5. License
      6. Badges
      7. Features
      8. Questions and Contributions
      9. Tests
              
      ##  Installation-
          ${data.projectLink}

      ##  Usage- 
      ${data.pic1}
      ${data.pic2}

      ## Technologies Used-
      ${data.technologiesUsed}

      ## Credits-  
      ${data.credit1}
      ${data.credit2}
      ${data.credit3}

      ## License-
      ${data.licenseUsed} 

      ## Features-
      ${data.feature1}

      ## Questions and Contributions-  
      ${data.userName}
      ${data.email}

      ## Tests-  
      ${data.test1}`;
        });
};



module.exports = generateMarkdown;


