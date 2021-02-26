// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseUsed, badge) {

    if (licenseUsed == "MIT") {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    } else if (licenseUsed == "Apache") {
        badge = "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    } else if (licenseUsed == "ISC") {
        badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
    }
    else {
        return "";
    }
    return badge;
};





// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(licenseUsed, link) {

    if (licenseUsed == MIT) {

        link = "[![License: MIT]](https://opensource.org/licenses/MIT)";
    }
    else if (licenseUsed == Apache) {
        link = "[![License: Apache](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (licenseUsed == ISC) {
        link = "[![License: ISC](https://opensource.org/licenses/ISC)";
    }
    else {
        return "";
    }
    return link;
};


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string


function renderLicenseSection(licenseUsed, section) {

    if (licenseUsed == MIT) {
        section = "[License](#license)";
    }

    else if (licenseUsed == Apache) {
        section = "[License](#license)";
    }
    else if (licenseUsed == ISC) {
        section = "[License](#license)";
    }
    else {
        return "[License](#license)";
    }
    return section;
};


//[Installation](#installation)
// // TODO: Create a function to generate markdown for README //Returning object like the question and answer json object string?
function generateMarkdown(data) {


    //const generateMarkdown = require('generateMarkdown.js');

    //User Questions to gather info needed to complete README blank inputs
    //README Generator-index.js

    //Import NPM package inquirer
    const inquirer = require('inquirer');

    //Import FS
    const fs = require('fs');


    //User Questions to gather info needed to complete README blank inputs
    const promptUser = () => {
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
        ])

            .then(data) = () => {
                const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

                fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
                    err ? console.log(err) : console.log('Success!')
                )

            };




